import React from "react";
import Page from "../Page/PageComponent";
import DashboardPage from "./DashboardPage";
import PropTypes from "prop-types";

const DashboardContainer = (props)=>{
    return (
        <Page icon={"grouped-bar-chart"} pageHeader={"Dashboard"}>
            <DashboardPage store={props.store}/>
        </Page>);
};

DashboardContainer.propTypes={
   store: PropTypes.object
};

export default DashboardContainer;