import React, {Component, Fragment} from "react";
import Loader from "../Loader/Loader";
import "./Dashboard.css";

import Temperature from "./Temperature/Temperature";
import { Button, Card, Elevation ,H3,H4,IconSelect,IntentSelect } from "@blueprintjs/core";
import {getToken} from "../../client-utils/utils";
import SelectComponent from "./SelectComponent";
const API_URL = "http://localhost:9001/api/sensor/";
class DashboardPage extends Component {
    state={
        isloading: true,
        sensorinformation: [],
        temperatureinformation:[],
        sensorid: "5d5efe039213560b5882acae" //meeting temperature
    };
    async componentDidMount() {
        const {token}=this.props.store.user;
        try{
            const _token_ = token || getToken() ;
            const response = await fetch(API_URL,{
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache",
                    "ignoreCache": "true",
                    "Authorization": `Bearer ${_token_}`,
                    "body":{
                        "sensor":"true"
                    }
                }
            });
            if(response.status===200){
                const d = await response.json();
                this.setState(()=>{
                    let filtedDataTemperature = d.data.filter(row=>row.sensortype==="Temperature");
                    return{
                        sensorinformation: d,
                        temperatureinformation:filtedDataTemperature,
                        isloading:false
                    }
                });
            }
        }catch (e) {
            console.error(e)
        }
    }

    currentsensorInformation=(e)=>{
        console.log(e);
        this.setState(()=>({
            sensorid: e._id
        }));

    };
    render() {
        const {isloading,sensorinformation,sensorid}=this.state;
        const {store}=this.props;
       return isloading ? (<Loader/>):(
           <Fragment>
               <Card >
                   <div className={"flex alignCenter"}>
                       <H4>Temperature Reading for the sensor</H4>
                       <SelectComponent
                           sensorinformation={this.state.temperatureinformation}
                           selectSensor={this.currentsensorInformation}
                           large={false}
                       />
                   </div>
                   <Card interactive={true} elevation={Elevation.TWO}  className={"chart-container"}>
                       <Temperature containerclassName={"chart-container"} store={store} sensorid={sensorid} />
                   </Card>
               </Card>
           </Fragment>

        )
    }
}
export default DashboardPage;
