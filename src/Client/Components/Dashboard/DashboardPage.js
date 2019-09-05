import React, {Component, Fragment} from "react";
import Loader from "../Loader/Loader";
import "./Dashboard.css";
import Temperature from "./Temperature/Temperature";
import { Button, Card, Elevation  } from "@blueprintjs/core";
class DashboardPage extends Component {
    state={
        isloading: true
    };

    render() {
        const {isloading}=this.state;
       return !isloading ? (<Loader/>):(
           <Fragment>
               <Card interactive={true} elevation={Elevation.TWO} className={"chart-container"}>
                   <Temperature containerclassName={"chart-container"}/>
               </Card>
           </Fragment>

        )
    }
}
export default DashboardPage;
