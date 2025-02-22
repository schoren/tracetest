# Sampling Tracetest Spans

Suppose you are considering Tracetest to run tests against a high-volume environment, such as production. In that case, you probably will hit some drawbacks, such as having
your test spans not sampled by your probabilistic sampler. There are a couple of things that you can do to avoid those problems:

## Add a Separate Pipeline for Tracetest in your OpenTelemetry Collector

> :warning: Note: This requires the [OpenTelemetry collector contrib](https://hub.docker.com/r/otel/opentelemetry-collector-contrib) instead of the core release
> of the collector

Your existing OpenTelemetry Collector already receives traces from your applications and sends them to your datastore and you have a set of processors configured to ensure the quality of the traces your datastore is receiving. It probably looks like this one:

```yaml
receivers:
  otlp:
    protocols:
      grpc:
      http:

processors:
  probabilistic_sampler:
    hash_seed: 22
    sampling_percentage: 5.0

  batch:

exporters:
  otlp/jaeger:
    endpoint: jaeger:4317
    tls:
      insecure: true

service:
  pipelines:
    traces/jaeger:
      receivers: [otlp]
      processors: [tail_sampling, batch]
      exporters: [otlp/jaeger]
```

We don't want to change this pipeline for your testing to work, so let's create a new pipeline for collecting only traces generated by Tracetest tests:

```yaml
receivers:
  otlp:
    protocols:
      grpc:
      http:

processors:
  probabilistic_sampler:
    hash_seed: 22
    sampling_percentage: 5.0

  batch:

  # Filters spans that have the tracestate `tracetest=true` in their context. This value
  # is injected by Tracetest when triggering the test
  #
  # Note: this requires the `collector-contrib` version of the collector
  tail_sampling:
    decision_wait: 5s
    policies:
      - name: tracetest-spans
        type: trace_state
        trace_state: { key: tracetest, values: ["true"] }

exporters:
  otlp/jaeger:
    endpoint: jaeger:4317
    tls:
      insecure: true

service:
  pipelines:
    traces/jaeger:
      receivers: [otlp]
      processors: [tail_sampling, batch]
      exporters: [otlp/jaeger]

  pipelines:
    traces/tracetest:
      receivers: [otlp]
      processors: [tail_sampling, batch]
      exporters: [otlp/jaeger]
```

With this configuration, you will still get 5% of all your traces, but you will also ensure that all your test traces are collected and sent to
Jaeger.

## Consider Trace-related Headers in your Ingress Endpoint

When exposing something to the internet, it's common to ignore all unknown headers from an HTTP request. This usually includes the `traceparent` and `tracestate` headers, which are the two headers defined in the [W3C specification](https://www.w3.org/TR/trace-context/#relationship-between-the-headers).

However, supporting those two fields can be beneficial. For starters, you can start testing your application in production using Tracetest. If your product APIs are used directly by your customers, you can also share the same Trace-ID as them and use this to correlate a faulty operation on their side with your trace.
