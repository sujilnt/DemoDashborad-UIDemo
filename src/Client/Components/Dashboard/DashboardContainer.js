import React from "react";
import Page from "../Page/PageComponent";
import DashboardPage from "./DashboardPage";

const DashboardContainer = ()=>{
    console.log("dashboard page is called");
    return (
        <Page icon={"dashboard"} pageHeader={"Dashboard"}>
            <DashboardPage/>
        </Page>);
};
export default DashboardContainer;