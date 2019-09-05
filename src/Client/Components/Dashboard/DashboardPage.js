import React, {Component, Fragment} from "react";
import Loader from "../Loader/Loader";
import BasicChart from "../../Chart/BasicChart";
import "./Dashboard.css";

import LineChart from "../../Chart/LineChart/LineChart";
import Temperature from "./Temperature/Temperature";
import { Button, Card, Elevation } from "@blueprintjs/core";
import LineRecharts from "./Temperature/LineRecharts";
class DashboardPage extends Component {
    state={
        isloading: true
    };

    render() {
        const {isloading}=this.state;
       return !isloading ? (<Loader/>):(
           <Fragment>
               <Card interactive={true} elevation={Elevation.TWo} className={"chart-container"}>
                   <Temperature containerclassName={"chart-container"}/>
               </Card>
           </Fragment>

        )
    }
}
export default DashboardPage;
