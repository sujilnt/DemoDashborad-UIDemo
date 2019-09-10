import React, {PureComponent} from "react";
import Page from "../Page/PageComponent";
import "./Analysis.css";
import { Button, Card,Classes,Intent} from "@blueprintjs/core";
import DateTimeRange from "./DataTimeRange";
import SelectComponent from "../Dashboard/SelectComponent";
import {getToken} from "../../client-utils/utils";
import Loader from "../Loader/Loader";
const API_URL = "http://localhost:9001/api/sensor/";
class AnalysisContainer extends PureComponent{
    state={
        startDate: new Date(new Date()),
        endDate: new Date(),
        isloading: true,
        loadingChart:true,
        sensorinformation: [],
        temperatureinformation:[],
        sensorid: "5d5efe039213560b5882acae"
    };

    currentsensorInformation=(e)=>{
        this.setState(()=>({
            sensorid: e._id
        }));

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

    getDate = (e)=>{
        let checknull = e.includes(r=> r=== null);
        let [startDate,endDate ] = !checknull ? e: [this.state.startDate,this.state.endDate];
        if(!checknull){
            this.setState(()=>({
                startDate,
                endDate
            }));
        }
    };
    renderChartAndTable=()=>{
        return(<div>this is a chart and Table </div>);
    }
    render(){
        const {isloading,sensorinformation,temperatureinformation,sensorid,startDate,endDate,loadingChart}=this.state;
        console.log("Analysis component",this.state.endDate,this.state.startDate);
        return isloading ? (<Loader/>) : (
            <div>
                <Page icon={"dashboard"} pageHeader={"Analysis"}>
                    <Card className={"flex fullWidth alignCenter"}>
                        <DateTimeRange
                            startDate={startDate}
                            endDate={endDate}
                            getDate={this.getDate}

                        />
                        <SelectComponent
                            sensorinformation={temperatureinformation}
                            selectSensor={this.currentsensorInformation}
                            large={true}
                        />
                        <Button icon={"clipboard"}
                                text={"Sensor Information"}
                                large={true}
                                intent={Intent.PRIMARY}
                        />
                    </Card>
                    {!loadingChart ? this.renderChartAndTable : ""}
                </Page>
            </div>
        );
    }
}

export default AnalysisContainer;