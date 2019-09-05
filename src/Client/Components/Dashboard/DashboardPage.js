import React, {Component, Fragment} from "react";
import Loader from "../Loader/Loader";
import BasicChart from "../../Chart/BasicChart";
import "./Dashboard.css";

import LineChart from "../../Chart/LineChart/LineChart";
import Temperature from "./Temperature/Temperature";
import LineRecharts from "./Temperature/LineRecharts";
class DashboardPage extends Component {
    state={
        isloading: true
    };

    render() {
        const {isloading}=this.state;
       return !isloading ? (<Loader/>):(
           <Fragment>
               <div className={"chart-container"}>
                   <Temperature containerclassName={"chart-container"}/>
               </div>
           </Fragment>

        )
    }
}
export default DashboardPage;
