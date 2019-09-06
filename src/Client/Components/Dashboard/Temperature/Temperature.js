import React, {Component, Fragment} from "react";
import {getToken} from "../../../client-utils/utils";
import AreaRechart from "./AreaRechart";
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
       const sensors = ["5d5eff729213560b5882acb4"];
       const {from,to}= apiDate();
       const {token} = this.props.store.user;
    try{
        const _token_ = token ||getToken();
        sensors.forEach(async (sensorid,i)=>{
            const response = await fetch(`${API_URL}${sensorid}?start=${from}&end=${to}`,{
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${_token_}`
                }
            });
            if(response.status === 200){
                const d = await response.json();
                this.setState(()=>{
                   return{
                       data: d,
                       loading: true
                   }
                });
            }
        });
    }catch(e){
        console.log("API Failed", e);
    }
   }
   render(){
       const {loading,data} = this.state;
       const {containerclassName}=this.props;
       return !loading?<div>loading.....</div>:(
           <Fragment>
               <AreaRechart data={this.state.data} />
           </Fragment>
       )
   }
}
export default Temperature;