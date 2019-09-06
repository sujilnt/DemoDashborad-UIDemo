import React from "react";
import Page from "../Page/PageComponent";
import DashboardPage from "./DashboardPage";

const DashboardContainer = (props)=>{
    console.log("dashboard page is called",props);
    return (
        <Page icon={"dashboard"} pageHeader={"Dashboard"}>
            <DashboardPage store={props.store}/>
        </Page>);
};
export default DashboardContainer;