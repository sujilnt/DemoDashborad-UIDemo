import React, {Component, Fragment} from "react";
import {getToken} from "../../../client-utils/utils";
import LineChart from "../../../Chart/LineChart/LineChart";
const API_URL = "http://localhost:9001/api/sensor/events/";
const apiDate = ()=>{
    const today = new Date();
    let year = today.getFullYear(), month = today.getMonth() , day =today.getDay();
    return {
        from: (new Date(year,month,day-7).toISOString()),
        to: (today.toISOString())
    }

};
class Temperature extends Component{
   state={
       loading: false,
       data: []
   };
   componentDidMount(){
       const dataArray =[];
       const sensors = ["5d5eff729213560b5882acb4"];
       const {from,to}= apiDate();
    try{
        const token = getToken();
        sensors.forEach(async (sensorid,i)=>{
            const response = await fetch(`${API_URL}${sensorid}?start=${from}&end=${to}`,{
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log(response);
            if(response.status === 200){
                const d = await response.json();
                console.log(d, "response");
                this.setState((prevstate,_)=>{
                    let datalength = prevstate.data.length;
                   return{
                       data: (datalength ? [] : (datalength ? [prevstate.data,...d]: d)),
                       loading: true
                   }
                });
                return dataArray.push(1);
            }
        });
        console.log(dataArray,"data Array");
    }catch(e){
        console.log("API Failed", e);
    }
   }
   render(){
       const {loading} = this.state;
       const {containerclassName}=this.props;
       console.log(this.state.data, "Temperature");
       return !loading?<div>loading.....</div>:(
           <Fragment>
               <LineChart data={this.state.data} containerclassName={"chart-container"}/>
           </Fragment>
       )
   }
}
export default Temperature;