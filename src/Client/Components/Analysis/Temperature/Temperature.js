import React, {PureComponent, Fragment} from "react";
import {getToken} from "../../../client-utils/utils";
import {Card,Callout,Intent} from "@blueprintjs/core";
import AreaRechart from "./AreaRechart";
import PropTypes from 'prop-types';
import TableComponent from "../../TableComponent/Table";

const API_URL = "http://localhost:9001/api/sensor/events/";
class AnalysisTemperature extends PureComponent{
   state={
       loading: false,
       data: []

   };
   retrieveData = async ()=>{
       let sensorid= this.props.sensorid;
       const {from,to}= this.props;
       const {token} = this.props.store.user;
       try{
           const _token_ = token ||getToken();
           console.log(`${API_URL}${sensorid}?start=${from.toISOString()}&end=${to.toISOString()}`);
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
           let d = await cacheddata.json() || {};
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
    renderCallout=()=>{
       let message = `The data for the particular sensor(id: ${this.props.sensorid}) is not available `;
        return (<Callout
            title={"Error"}
            intent={Intent.PRIMARY}
        >
            <p className={"bold"}>{message}</p>
        </Callout>);
    };
   render(){
       console.log("props analysis",this.state,this.props,this.props.from.toUTCString(),typeof(this.props.from.toUTCString()));
       const {loading,data} = this.state;
       const {containerclassName}=this.props;
       return !loading?<div>loading.....</div>:(
           <Fragment>
               {
                   data.length > 0? (
                       <Fragment>
                           <Card className={containerclassName}>
                               <AreaRechart data={data} />
                           </Card>
                           <div className={"marginTopBottom"} >
                               <TableComponent data={data}/>
                           </div>
                       </Fragment>
                       ): this.renderCallout()
               }


           </Fragment>
       )
   }
}
export default AnalysisTemperature;
AnalysisTemperature.defaultProps={
    store: {},
    sensorid: ""
};
AnalysisTemperature.propTypes={
    containerclassName: PropTypes.string,
    store: PropTypes.object,
    sensorid:PropTypes.string,
    from: PropTypes.object,
    to:PropTypes.object
};