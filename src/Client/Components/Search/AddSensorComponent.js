import React,{PureComponent} from "react";
import { Drawer,Classes,Intent,Button }from "@blueprintjs/core";
import SensorInformationForm from "./Form";
class AddSensorComponent extends PureComponent{
    state={
        isOpen: false,
    };

    handleOpen = ()=>{
        this.setState({
            isOpen: true
        });
    };
    handleClose = ()=>{
        this.setState({
            isOpen: false
        });
    };
    render(){
        return(
            <div style={{position:"relative"}}>
                <Button
                    onClick={this.handleOpen}
                    intent={Intent.PRIMARY}
                    rightIcon={"insert"}
                >
                    Add Sensor
                </Button>
                <Drawer
                    isOpen={this.state.isOpen}
                    icon="info-sign"
                    onClose={this.handleClose}
                    title="Add Sensor"
                >
                    <div className={Classes.DRAWER_BODY}>
                        <div className={Classes.DIALOG_BODY}>
                            <h3>
                                <strong>
                                   Enter the sensor information Details to the Form
                                </strong>
                            </h3>
                            <SensorInformationForm store ={this.props.store}/>
                        </div>
                    </div>
                    <div className={Classes.DRAWER_FOOTER}>Footer</div>
                </Drawer>
            </div>
        );
    }
}
export default AddSensorComponent;