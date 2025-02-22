package client_test

import (
	"context"
	"testing"

	"github.com/kubeshop/tracetest/agent/client"
	"github.com/kubeshop/tracetest/agent/client/mocks"
	"github.com/kubeshop/tracetest/agent/proto"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestSendTriggerResult(t *testing.T) {
	server := mocks.NewGrpcServer()

	client, err := client.Connect(context.Background(), server.Addr())
	require.NoError(t, err)

	err = client.Start(context.Background())
	require.NoError(t, err)

	triggerResponse := &proto.TriggerResponse{
		TestID: "my test",
		RunID:  1,
		TriggerResult: &proto.TriggerResult{
			Type: "http",
			Http: &proto.HttpResponse{
				StatusCode: 200,
				Status:     "OK",
				Headers:    []*proto.HttpHeader{},
				Body:       `{"ok": true}`,
			},
		},
	}

	err = client.SendTriggerResponse(context.Background(), triggerResponse)
	require.NoError(t, err)

	receivedTriggerResponse := server.GetLastTriggerResponse()

	assert.Equal(t, triggerResponse.TestID, receivedTriggerResponse.TestID)
	assert.Equal(t, triggerResponse.RunID, receivedTriggerResponse.RunID)
	assert.Equal(t, triggerResponse.TriggerResult.Type, receivedTriggerResponse.TriggerResult.Type)
	assert.Equal(t, triggerResponse.TriggerResult.Http.StatusCode, receivedTriggerResponse.TriggerResult.Http.StatusCode)
	assert.Equal(t, triggerResponse.TriggerResult.Http.Status, receivedTriggerResponse.TriggerResult.Http.Status)
	assert.Equal(t, len(triggerResponse.TriggerResult.Http.Headers), len(receivedTriggerResponse.TriggerResult.Http.Headers))
	assert.Equal(t, triggerResponse.TriggerResult.Http.Body, receivedTriggerResponse.TriggerResult.Http.Body)
}
