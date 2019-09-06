import React, {Component, Fragment} from "react";
import Loader from "../Loader/Loader";
import "./Dashboard.css";
import { Select,ItemRenderer,ItemPredicate } from "@blueprintjs/select";
import Temperature from "./Temperature/Temperature";
import { Button, Card, Elevation ,H3,IconSelect,IntentSelect } from "@blueprintjs/core";
import {getToken} from "../../client-utils/utils";
const API_URL = "http://localhost:9001/api/sensor/";
class DashboardPage extends Component {
    state={
        isloading: true,
        sensorinformation: []
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
                        "senosr":"true"
                    }
                }
            });
            if(response.status===200){
                const d = await response.json();
                console.log("data....",response,d);
                this.setState(()=>{
                    return{
                        sensorinformation: d,
                    }
                });
            }
        }catch (e) {
            console.error(e)
        }
    }

    handleIconNameChange=()=>{
    };
    render() {
        const {isloading}=this.state;
        console.log("page Error" ,this.state);
        const {store}=this.props;
       return !isloading ? (<Loader/>):(
           <Fragment>
               <Card >
                   <H3>Temperature Reading</H3>
                   <Card interactive={true} elevation={Elevation.TWO}  className={"chart-container"}>
                       <Temperature containerclassName={"chart-container"} store={store}/>
                   </Card>
               </Card>
           </Fragment>

        )
    }
}
export default DashboardPage;
