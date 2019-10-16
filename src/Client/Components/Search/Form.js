import React, {Fragment, PureComponent} from "react";
import {Button, Divider,FormGroup, InputGroup, Intent} from "@blueprintjs/core";
import {getToken} from "../../client-utils/utils";

const API_URL = "http://localhost:9001/api/sensor/";

class SensorInformationForm extends PureComponent{
    state={
        sensorType: "Temperature",
        sensorId:"",
        sensorName: ""

    };

    addSensor= async ()=>{
        let {user} = this.props.store;
        let sensorInformation = {
            data: [{
                "sensor": true,
                "sensordt": this.state.sensorId,
                "name": this.state.sensorName,
                "sensortype": this.state.sensorType
            }]
        };
        console.log("sensor is added ",this.state);
        try{
            const _token_ = user.token || getToken();
            const postrequest_sensors = await fetch(API_URL,{
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${_token_}`
                },
                body:JSON.stringify(sensorInformation)
            });
        }catch (e) {
            console.log(e);
        }
        this.props.handleClose();
        this.props.forceUpdate();
    };
    reset=()=>{
        this.setState({
            sensorType: "Temperature",
            sensorId:"",
            sensorName: ""
        })
    };
    inputhandlechange=(e)=>{
        const {target} = e;
        this.setState(()=>({
            [target.name]: target.value
        }));
    };
    render() {
        return(
            <Fragment>
                <FormGroup
                    helperText="Enter name of the sensor for reference ..."
                    label="Sensor Name"
                    labelFor="text-input"
                    labelInfo="(required)"
                >
                    <InputGroup
                        id="text-input"
                        large={true}
                        intent={Intent.PRIMARY}
                        name={"sensorName"}
                        value={this.state.sensorName}
                        placeholder="Enter the Sensor Name "
                        onChange = {this.inputhandlechange}
                    />
                </FormGroup>
                <FormGroup
                    helperText="Enter DT-sensor Id  provided by the DT"
                    label="Sensor Id"
                    labelFor="text-input"
                    labelInfo="(required)"
                >
                    <InputGroup
                        id="text-input-sensorid"
                        large={true}
                        name={"sensorId"}
                        intent={Intent.PRIMARY}
                        value={this.state.sensorId}
                        placeholder="Enter the sensor id "
                        onChange = {this.inputhandlechange}
                    />
                </FormGroup>
                <FormGroup
                    helperText="Enter Type of Sensor Ex: Temperature , Proximity"
                    label="Sensor Type"
                    labelFor="text-input"
                    labelInfo="(required)"
                >
                    <InputGroup
                        id="text-input-sensortype"
                        large={true}
                        name={"sensorType"}
                        value={this.state.sensorType}
                        intent={Intent.PRIMARY}
                        placeholder="Enter the Sensor Type "
                        onChange = {this.inputhandlechange}
                    />
                </FormGroup>
                <div style={{marginTop: "20px"}}></div>
                <Button
                    onClick={this.addSensor}
                    large={true}
                    intent={Intent.SUCCESS}
                    rightIcon={"tick-circle"}
                >
                    Save Sensor
                </Button>
                <span style={{margin : "0 10px"}}></span>
                <Button
                    onClick={this.reset}
                    intent={Intent.WARNING}
                    rightIcon={"reset"}
                    large={true}
                >
                    Reset Form
                </Button>
            </Fragment>
        )
    }
}
export default SensorInformationForm;