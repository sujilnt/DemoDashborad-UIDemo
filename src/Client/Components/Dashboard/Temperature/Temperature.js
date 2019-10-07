import React, {Component, Fragment} from "react";
import {getToken} from "../../../client-utils/utils";
import AreaRechart from "./AreaRechart";
import moment from "moment";
const API_URL = "http://localhost:9001/api/sensor/events/";

const apiDate = ()=>{
    return {
        from: (moment().subtract(7,"days").toISOString()),
        to: (moment().toISOString())
    }
};
class Temperature extends Component{
   state={
       loading: false,
       data: []
   };
   retrieveData = async ()=>{
       let sensorid= this.props.sensorid;
       const {from,to}= apiDate();
       const {token} = this.props.store.user;
       try{
           const _token_ = token ||getToken();
           const response = await fetch(`${API_URL}${sensorid}?start=${from}&end=${to}`,{
               method: "GET",
               headers: {
                   "Accept": "application/json",
                   "Content-Type": "application/json",
                   "Authorization": `Bearer ${_token_}`
               }
           });
           let storeresponse = response.clone();
           let cache = await caches.open("sujil");
           let url = `${API_URL}${sensorid}`;
           await cache.put(url, storeresponse);
           if(response.status === 200){
               const d = await response.json();
               console.log("inside lopp",d);
               this.setState(()=>{
                   return{
                       data: d,
                       loading: true
                   }
               });
           }
       }catch(e){
           let cacheddata = await caches.match(
               `${API_URL}${sensorid}`,
               {cacheName: "sujil",ignoreSearch:true}
               );
           let d = await cacheddata.json();
           console.log("d",d,`${API_URL}${sensorid}`);
           this.setState(()=>{
               return{
                   data: d,
                   loading: true
               }
           });
           console.log("API Failed", e);
       }
   };
   async componentDidUpdate(prevProps){
        return (this.props.sensorid !== prevProps.sensorid) ?
            (await this.retrieveData()): false
    }
    async componentDidMount(){
       await this.retrieveData();
   }
   render(){
        console.log("temperature",this.state);
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

