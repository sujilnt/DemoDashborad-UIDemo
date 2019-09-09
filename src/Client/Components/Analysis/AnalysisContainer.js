import React, {Fragment,PureComponent} from "react";
import Page from "../Page/PageComponent";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import moment from 'moment';
import { DateRangeInput } from "@blueprintjs/datetime";
import {Intent,Classes} from "@blueprintjs/core";

import "./Analysis.css";
class AnalysisContainer extends PureComponent{
    state={
        startDate: new Date(new Date()),
        endDate: new Date(),
    };
    handleRangeChange = (e)=>{
        let checknull = e.includes(r=> r=== null);
        let [startDate,endDate ] = !checknull ? e: [this.state.startDate,this.state.endDate];
        console.log(startDate,endDate,e,checknull);
        if(!checknull){
            this.setState(()=>({
                startDate,
                endDate
            }));
        }
    };
    render(){
        console.log("Analysis component",this.state.endDate,this.state.startDate);
        return(
            <div>
                <Page icon={"dashboard"} pageHeader={"Analysis"}>
                    <DateRangeInput
                        formatDate={date => date}
                        shortcuts={true}
                        className={"dateRangeInput"}
                        popoverProps={{
                            popoverClassName:"popover_date"
                        }}
                        large={true}
                        allowSingleDayRange={true}
                        closeOnSelection={true}
                        selectAllOnFocus={true}
                        timePrecision={"minute"}
                        showArrowButtons={true}
                        startInputProps={{
                            className: "dataRangeProp",
                            large:true
                        }}
                        endInputProps={{
                            className: "dataRangeProp",
                           large:true
                        }}
                        timePickerProps={{
                                showArrowButton: true
                            }}
                        onChange={this.handleRangeChange}
                        parseDate={str => new Date(str)}
                        value={[this.state.startDate, this.state.endDate]}
                    />
                </Page>
            </div>
        );
    }
}

export default AnalysisContainer;