import React, {Fragment, PureComponent} from "react";
import Page from "../Page/PageComponent";
import {getToken} from "../../client-utils/utils";
import TableComponent from "./table/Table";
import {Icon, Intent} from "@blueprintjs/core";
import AddSensorComponent from "./AddSensorComponent";
import PropTypes from "prop-types";
import {CSVLink} from "react-csv";

// headers for csv
let headers = [
    { label: "Sensor ID", key: "_id" },
    { label: "Sensor Name", key: "name" },
    { label: "sensor - Serial N0", key: "sensordt" },
    { label: "Sensor Type ", key: "sensortype" }
];
// API_URL: Sensor API - calling list of sensors .
const API_URL ="http://localhost:9001/api/sensor/";
class SearchContainer extends PureComponent{
    state={
        sensors: [],
    };
    getSensorInformation = async ()=>{
    try{
    const {store}=this.props;
    const {user}= store;
    const token=user.token;
    const _token = token || getToken();
    const response = await fetch(API_URL,{
        method: "GET",
        headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${_token}`
            }
        });
    if(response.status===200){
        const d = await response.json();
        this.setState({
            sensors: d.data
        });
    }}catch (e) {
    console.log(e);
}
    };
     componentDidMount() {
        this.getSensorInformation();
    }
    render(){
        //console.log("rerendering the sensor",this.props);
        return(
            <Page icon={"search-template"} pageHeader={"Sensor Information"}>
                {
                    this.state.sensors.length > 0 ?
                        <Fragment>
                            <div
                                className={"flex"}
                                 style={{
                                     justifyContent:"flex-end",
                                     alignItems: "center",
                                     marginTop: "-20",
                                     marginBottom: "20px"}}
                            >
                                <div style={{marginRight: "20px"}}>
                                    <AddSensorComponent
                                        store={this.props.store}
                                        forceUpdate={this.getSensorInformation}
                                    />
                                </div>
                            <CSVLink
                                data={this.state.sensors}
                                headers={headers}
                                filename={"sensors.csv"}
                            >
                                <Icon icon={"compressed"}
                                      iconSize={"20"}
                                      intent={Intent.PRIMARY}
                                      htmlTitle={"csv export Button"}
                                      title={"csv export"}
                                />
                            </CSVLink>
                            </div>
                            <div style={{margin: "20px 0"}}>
                            <TableComponent data={this.state.sensors} />
                            </div>
                        </Fragment>
                         :
                        <div> no data</div>
                }
            </Page>
        );
    }

}
export default SearchContainer;
SearchContainer.propTypes={
    store: PropTypes.object
};