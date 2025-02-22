# CI/CD Automation

This section contains a general overview of running Tracetest in CI/CD pipelines.

You can find guides for:

- [GitHub Actions](./github-actions-pipeline.md)
- [Testkube](./testkube-pipeline.md)
- [Tekton](./tekton-pipeline.md)

:::note
If you want to see more examples with other CI/CD tools, let us know by [opening an issue in GitHub](https://github.com/kubeshop/tracetest/issues/new/choose)!
:::

Tracetest is designed to work with all CI/CD platforms and automation tools. To enable Tracetest to run in CI/CD environments, make sure to [install the Tracetest CLI](../getting-started/installation.mdx) and configure it to access your [Tracetest server](../core/configuration/server.mdx).

To read more about integrating Tracetest with CI/CD tools, check out tutorials in our blog:

- [Integrating Tracetest with GitHub Actions in a CI pipeline](https://kubeshop.io/blog/integrating-tracetest-with-github-actions-in-a-ci-pipeline)
- [50% Faster CI Pipelines with GitHub Actions](https://tracetest.io/blog/50-faster-ci-pipelines-with-github-actions)

## Running Tracetest CLI from Docker

Many integrations with CI/CD tools can be accomplished by running the [Tracetest CLI](../cli/configuring-your-cli.md) to execute a test against a remote Tracetest server. If you do not want to install the Tracetest CLI in your environment, you can choose to directly execute it from a Docker image.

**How to Use**:

Use the command below, substituting the following placeholders:

- `your-tracetest-server-url` - the URL to the running Tracetest server you wish to execute the test on. Example: `http://localhost:11633/`
- `file-path` - The path to the saved Tracetest test. Example: `./mytest.yaml`

```bash wordWrap=true
docker run --rm -it -v$(pwd):$(pwd) -w $(pwd) --network host --entrypoint tracetest kubeshop/tracetest:latest -s <your-tracetest-server-url> run test --file <file-path>
```
