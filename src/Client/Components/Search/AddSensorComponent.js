import React,{PureComponent,Fragment} from "react";
import { Drawer,Classes,Intent,Button }from "@blueprintjs/core";
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
            <Fragment style={{position:"relative"}}>
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
                            <p>
                                <strong>
                                   Enter the sensor information Details to the Form
                                </strong>
                            </p>
                            <div>Any form component</div>
                        </div>
                    </div>
                    <div className={Classes.DRAWER_FOOTER}>Footer</div>
                </Drawer>
            </Fragment>
        );
    }
}
export default AddSensorComponent;