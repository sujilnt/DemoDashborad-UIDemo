import React, {Fragment} from "react";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import { DateRangeInput } from "@blueprintjs/datetime";
import PropTypes from 'prop-types';
import "./Analysis.css";

const DateTimeRange = (props) => {
    const {startDate,endDate,getDate}=props;
    console.log("daterange", startDate,endDate,getDate);
    console.log("daterange  ", typeof(startDate),typeof(endDate),typeof(getDate));
    return (
        <Fragment>
            <DateRangeInput
                formatDate={date => date}
                shortcuts={true}
                className={"dateRangeInput"}
                popoverProps={{
                    popoverClassName: "popover_date"
                }}
                large={true}
                allowSingleDayRange={true}
                closeOnSelection={true}
                selectAllOnFocus={true}
                timePrecision={"minute"}
                showArrowButtons={true}
                startInputProps={{
                    className: "dataRangeProp",
                    large: true,
                    leftIcon: "calendar"
                }}
                endInputProps={{
                    className: "dataRangeProp",
                    large: true,
                    leftIcon: "calendar"
                }}
                timePickerProps={{
                    showArrowButtons: true
                }}
                onChange={getDate}
                parseDate={str => new Date(str)}
                value={[startDate, endDate]}
            />
        </Fragment>
    );
};

export default DateTimeRange;
/*
DateTimeRange.propTypes={
    startDate: ,
    endDate,getDate
};*/