import React, {Fragment, PureComponent} from "react";
import Page from "../Page/PageComponent";
import {getToken} from "../../client-utils/utils";
import TableComponent from "./table/Table";
import {Icon, Intent} from "@blueprintjs/core";
import {CSVLink} from "react-csv";
let headers = [
    { label: "Sensor ID", key: "_id" },
    { label: "Sensor Name", key: "name" },
    { label: "sensor - Serial N0", key: "sensordt" },
    { label: "Sensor Type ", key: "sensortype" }
];
const API_URL ="http://localhost:9001/api/sensor/";
class SearchContainer extends PureComponent{
    state={
        sensors: []
    };
    async componentDidMount() {
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
                })
            }
        }catch (e) {
            console.log(e);
        }
    }

    render(){
        console.log("props search component",this.props,this.state);
        return(
            <Page icon={"search-template"} pageHeader={"Sensor Information"}>
                {
                    this.state.sensors.length > 0 ?
                        <Fragment>
                            <div
                                className={"marginTopBottom flex"}
                                 style={{justifyContent:"flex-end",margin: "20px 0"}}
                            >
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