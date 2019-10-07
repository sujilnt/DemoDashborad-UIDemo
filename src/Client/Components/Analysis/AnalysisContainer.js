import React, {PureComponent} from "react";
import Page from "../Page/PageComponent";
import "./Analysis.css";
import {Button, Card, Elevation, Intent} from "@blueprintjs/core";
import DateTimeRange from "./DataTimeRange";
import SelectComponent from "../Dashboard/SelectComponent";
import {getToken} from "../../client-utils/utils";
import Loader from "../Loader/Loader";
import Temperature from "./Temperature/Temperature";
import PropTypes from 'prop-types';

const API_URL = "http://localhost:9001/api/sensor/";
class AnalysisContainer extends PureComponent{
    state={
        startDate: new Date(new Date()),
        endDate: new Date(),
        isloading: true,
        loadingChart:true,
        sensorinformation: [],
        temperatureinformation:[],
        sensorid: "5d9683bfe99a86e42d3c5f0e"
    };

    currentsensorInformation=(e)=>{
        this.setState(()=>({
            sensorid: e._id
        }));

    };

    async componentDidMount() {
        const {store}=this.props;
        const {user}= store;
        const token=user.token;
        try {
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
        console.log("AreaContainer",this.props);
        return(
            <Card interactive={true} elevation={Elevation.TWO}  className={"marginTopBottom fullheight"}>
                <Temperature
                    containerclassName={"chart-container"}
                    store={this.props.store}
                    sensorid={this.state.sensorid}
                    from={this.state.startDate}
                    to={this.state.endDate}
                />
            </Card>
        );
    };
    getChart= ()=>{
        console.log("clicked man");
        this.setState(()=>({
            loadingChart:false
        }));
    };
    render(){
        const {isloading,temperatureinformation,startDate,endDate,loadingChart}=this.state;
        console.log("Analysis component",this.state.endDate,this.state.startDate);
        return isloading ? (<Loader/>) : (
            <div>
                <Page icon={"dashboard"} pageHeader={"Analysis"}>
                    <Card className={"flex fullWidth alignCenter space-between"}>
                        <div className={"flex alignCenter"}>
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
                        </div>
                        <Button icon={"clipboard"}
                                text={"Sensor Information"}
                                large={true}
                                intent={Intent.PRIMARY}
                                onClick={this.getChart}
                        />
                    </Card>
                    {!loadingChart ? this.renderChartAndTable() : ""}
                </Page>
            </div>
        );
    }
}

export default AnalysisContainer;
AnalysisContainer.defaultProps={
    store:{}
};

AnalysisContainer.propTypes={
    store:PropTypes.object
};