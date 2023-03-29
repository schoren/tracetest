/*
TraceTest

OpenAPI definition for TraceTest endpoint and resources

API version: 0.2.1
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"time"
)

// checks if the TestRunEvent type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TestRunEvent{}

// TestRunEvent struct for TestRunEvent
type TestRunEvent struct {
	Type                *string           `json:"type,omitempty"`
	Stage               *string           `json:"stage,omitempty"`
	Title               *string           `json:"title,omitempty"`
	Description         *string           `json:"description,omitempty"`
	CreatedAt           *time.Time        `json:"createdAt,omitempty"`
	TestId              *string           `json:"testId,omitempty"`
	RunId               *string           `json:"runId,omitempty"`
	DataStoreConnection *ConnectionResult `json:"dataStoreConnection,omitempty"`
	Polling             *PollingInfo      `json:"polling,omitempty"`
	Outputs             []OutputInfo      `json:"outputs,omitempty"`
}

// NewTestRunEvent instantiates a new TestRunEvent object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTestRunEvent() *TestRunEvent {
	this := TestRunEvent{}
	return &this
}

// NewTestRunEventWithDefaults instantiates a new TestRunEvent object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTestRunEventWithDefaults() *TestRunEvent {
	this := TestRunEvent{}
	return &this
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *TestRunEvent) GetType() string {
	if o == nil || isNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TestRunEvent) GetTypeOk() (*string, bool) {
	if o == nil || isNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *TestRunEvent) HasType() bool {
	if o != nil && !isNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *TestRunEvent) SetType(v string) {
	o.Type = &v
}

// GetStage returns the Stage field value if set, zero value otherwise.
func (o *TestRunEvent) GetStage() string {
	if o == nil || isNil(o.Stage) {
		var ret string
		return ret
	}
	return *o.Stage
}

// GetStageOk returns a tuple with the Stage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TestRunEvent) GetStageOk() (*string, bool) {
	if o == nil || isNil(o.Stage) {
		return nil, false
	}
	return o.Stage, true
}

// HasStage returns a boolean if a field has been set.
func (o *TestRunEvent) HasStage() bool {
	if o != nil && !isNil(o.Stage) {
		return true
	}

	return false
}

// SetStage gets a reference to the given string and assigns it to the Stage field.
func (o *TestRunEvent) SetStage(v string) {
	o.Stage = &v
}

// GetTitle returns the Title field value if set, zero value otherwise.
func (o *TestRunEvent) GetTitle() string {
	if o == nil || isNil(o.Title) {
		var ret string
		return ret
	}
	return *o.Title
}

// GetTitleOk returns a tuple with the Title field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TestRunEvent) GetTitleOk() (*string, bool) {
	if o == nil || isNil(o.Title) {
		return nil, false
	}
	return o.Title, true
}

// HasTitle returns a boolean if a field has been set.
func (o *TestRunEvent) HasTitle() bool {
	if o != nil && !isNil(o.Title) {
		return true
	}

	return false
}

// SetTitle gets a reference to the given string and assigns it to the Title field.
func (o *TestRunEvent) SetTitle(v string) {
	o.Title = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *TestRunEvent) GetDescription() string {
	if o == nil || isNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TestRunEvent) GetDescriptionOk() (*string, bool) {
	if o == nil || isNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *TestRunEvent) HasDescription() bool {
	if o != nil && !isNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *TestRunEvent) SetDescription(v string) {
	o.Description = &v
}

// GetCreatedAt returns the CreatedAt field value if set, zero value otherwise.
func (o *TestRunEvent) GetCreatedAt() time.Time {
	if o == nil || isNil(o.CreatedAt) {
		var ret time.Time
		return ret
	}
	return *o.CreatedAt
}

// GetCreatedAtOk returns a tuple with the CreatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TestRunEvent) GetCreatedAtOk() (*time.Time, bool) {
	if o == nil || isNil(o.CreatedAt) {
		return nil, false
	}
	return o.CreatedAt, true
}

// HasCreatedAt returns a boolean if a field has been set.
func (o *TestRunEvent) HasCreatedAt() bool {
	if o != nil && !isNil(o.CreatedAt) {
		return true
	}

	return false
}

// SetCreatedAt gets a reference to the given time.Time and assigns it to the CreatedAt field.
func (o *TestRunEvent) SetCreatedAt(v time.Time) {
	o.CreatedAt = &v
}

// GetTestId returns the TestId field value if set, zero value otherwise.
func (o *TestRunEvent) GetTestId() string {
	if o == nil || isNil(o.TestId) {
		var ret string
		return ret
	}
	return *o.TestId
}

// GetTestIdOk returns a tuple with the TestId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TestRunEvent) GetTestIdOk() (*string, bool) {
	if o == nil || isNil(o.TestId) {
		return nil, false
	}
	return o.TestId, true
}

// HasTestId returns a boolean if a field has been set.
func (o *TestRunEvent) HasTestId() bool {
	if o != nil && !isNil(o.TestId) {
		return true
	}

	return false
}

// SetTestId gets a reference to the given string and assigns it to the TestId field.
func (o *TestRunEvent) SetTestId(v string) {
	o.TestId = &v
}

// GetRunId returns the RunId field value if set, zero value otherwise.
func (o *TestRunEvent) GetRunId() string {
	if o == nil || isNil(o.RunId) {
		var ret string
		return ret
	}
	return *o.RunId
}

// GetRunIdOk returns a tuple with the RunId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TestRunEvent) GetRunIdOk() (*string, bool) {
	if o == nil || isNil(o.RunId) {
		return nil, false
	}
	return o.RunId, true
}

// HasRunId returns a boolean if a field has been set.
func (o *TestRunEvent) HasRunId() bool {
	if o != nil && !isNil(o.RunId) {
		return true
	}

	return false
}

// SetRunId gets a reference to the given string and assigns it to the RunId field.
func (o *TestRunEvent) SetRunId(v string) {
	o.RunId = &v
}

// GetDataStoreConnection returns the DataStoreConnection field value if set, zero value otherwise.
func (o *TestRunEvent) GetDataStoreConnection() ConnectionResult {
	if o == nil || isNil(o.DataStoreConnection) {
		var ret ConnectionResult
		return ret
	}
	return *o.DataStoreConnection
}

// GetDataStoreConnectionOk returns a tuple with the DataStoreConnection field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TestRunEvent) GetDataStoreConnectionOk() (*ConnectionResult, bool) {
	if o == nil || isNil(o.DataStoreConnection) {
		return nil, false
	}
	return o.DataStoreConnection, true
}

// HasDataStoreConnection returns a boolean if a field has been set.
func (o *TestRunEvent) HasDataStoreConnection() bool {
	if o != nil && !isNil(o.DataStoreConnection) {
		return true
	}

	return false
}

// SetDataStoreConnection gets a reference to the given ConnectionResult and assigns it to the DataStoreConnection field.
func (o *TestRunEvent) SetDataStoreConnection(v ConnectionResult) {
	o.DataStoreConnection = &v
}

// GetPolling returns the Polling field value if set, zero value otherwise.
func (o *TestRunEvent) GetPolling() PollingInfo {
	if o == nil || isNil(o.Polling) {
		var ret PollingInfo
		return ret
	}
	return *o.Polling
}

// GetPollingOk returns a tuple with the Polling field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TestRunEvent) GetPollingOk() (*PollingInfo, bool) {
	if o == nil || isNil(o.Polling) {
		return nil, false
	}
	return o.Polling, true
}

// HasPolling returns a boolean if a field has been set.
func (o *TestRunEvent) HasPolling() bool {
	if o != nil && !isNil(o.Polling) {
		return true
	}

	return false
}

// SetPolling gets a reference to the given PollingInfo and assigns it to the Polling field.
func (o *TestRunEvent) SetPolling(v PollingInfo) {
	o.Polling = &v
}

// GetOutputs returns the Outputs field value if set, zero value otherwise.
func (o *TestRunEvent) GetOutputs() []OutputInfo {
	if o == nil || isNil(o.Outputs) {
		var ret []OutputInfo
		return ret
	}
	return o.Outputs
}

// GetOutputsOk returns a tuple with the Outputs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TestRunEvent) GetOutputsOk() ([]OutputInfo, bool) {
	if o == nil || isNil(o.Outputs) {
		return nil, false
	}
	return o.Outputs, true
}

// HasOutputs returns a boolean if a field has been set.
func (o *TestRunEvent) HasOutputs() bool {
	if o != nil && !isNil(o.Outputs) {
		return true
	}

	return false
}

// SetOutputs gets a reference to the given []OutputInfo and assigns it to the Outputs field.
func (o *TestRunEvent) SetOutputs(v []OutputInfo) {
	o.Outputs = v
}

func (o TestRunEvent) MarshalJSON() ([]byte, error) {
	toSerialize, err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TestRunEvent) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !isNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !isNil(o.Stage) {
		toSerialize["stage"] = o.Stage
	}
	if !isNil(o.Title) {
		toSerialize["title"] = o.Title
	}
	if !isNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !isNil(o.CreatedAt) {
		toSerialize["createdAt"] = o.CreatedAt
	}
	if !isNil(o.TestId) {
		toSerialize["testId"] = o.TestId
	}
	if !isNil(o.RunId) {
		toSerialize["runId"] = o.RunId
	}
	if !isNil(o.DataStoreConnection) {
		toSerialize["dataStoreConnection"] = o.DataStoreConnection
	}
	if !isNil(o.Polling) {
		toSerialize["polling"] = o.Polling
	}
	if !isNil(o.Outputs) {
		toSerialize["outputs"] = o.Outputs
	}
	return toSerialize, nil
}

type NullableTestRunEvent struct {
	value *TestRunEvent
	isSet bool
}

func (v NullableTestRunEvent) Get() *TestRunEvent {
	return v.value
}

func (v *NullableTestRunEvent) Set(val *TestRunEvent) {
	v.value = val
	v.isSet = true
}

func (v NullableTestRunEvent) IsSet() bool {
	return v.isSet
}

func (v *NullableTestRunEvent) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTestRunEvent(val *TestRunEvent) *NullableTestRunEvent {
	return &NullableTestRunEvent{value: val, isSet: true}
}

func (v NullableTestRunEvent) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTestRunEvent) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
