import React, { PureComponent } from 'react';
import {timeFormat} from "d3-time-format"
import {AreaChart, Area, Legend,XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer,Brush} from 'recharts';
import PropTypes from "prop-types";

export default class AreaRechart extends PureComponent {
    formatDate(date){
        let formatTime = timeFormat("%B %d, %Y");
        return formatTime(new Date(date)) ;

    }
    render() {
        const {data} = this.props;
        return (
            <ResponsiveContainer>
            <AreaChart
                data={data}
                margin={{
                    top: 10, right: 30, left: 10, bottom: 20,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="time"
                    name={"date/time"}
                    tickFormatter={this.formatDate}
                    allowDataOverflow={true}
                    label={{value: "x-Axis: Date/time",position:"insideBottomRight",offset:-5, style:{fontWeight: "bold"}}}
                    padding={{bottom: "20"}}
                    axisLine={{strokeWidth: "2"}}
                    stroke-width={2}
                />
                <YAxis
                    dataKey="value"
                    domain={[0, dataMax => (Math.abs(dataMax) + 3)]}
                    axisLine={{strokeWidth: "1.5"}}
                    label={{value: "Temperature",position:"insideTopRight",offset:-20,style:{fontWeight: "bold"}}}
                />
                <Legend verticalAlign="top" height={36}/>
                <Tooltip labelFormatter={(time)=> {
                    let formatTime = timeFormat("%B %d, %Y %H:%M %p");
                    return formatTime(new Date(time)) ;

                }}/>
                <Area stackId="sid" key={"5d5eff729213560b5882acb"}
                      type="monotone"
                      dataKey="value"
                      stroke="#137cbd"
                      fillOpacity={0.2}
                      fill="#137cbd"
                      strokeWidth={2.2}
                      name={"Temperature"} unit=" °C"
                      activeDot={{ strokeWidth: 2, r: 10 }}
                />
                <Area
                    type="monotone"
                    dataKey="oat"
                    stroke="#0D8050"
                    fillOpacity={0.4}
                    fill="#0D8050"
                    strokeWidth={2.2}
                    name={"Outside Air Temperature"} unit=" °C"
                    activeDot={{ strokeWidth: 2, r: 10 }}
                />
                <Brush
                    dataKey='name'
                    height={50}
                    stroke="#000000"
                    y={310}
                    startIndex={0}
                    endIndex={20}>

                    <AreaChart>
                        <Area dataKey="value" fill="#137cbd" stackId="a" />
                        <Area dataKey="oat" fill="#0D8050" stackId="a" />
                    </AreaChart>

                </Brush>
            </AreaChart>

            </ResponsiveContainer>
        );
    }
}
AreaRechart.defaultProps={
    data:[]
};

AreaRechart.propTypes={
    data:PropTypes.array.isRequired
};