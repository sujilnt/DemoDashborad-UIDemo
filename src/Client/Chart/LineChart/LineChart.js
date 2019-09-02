import React,{PureComponent} from "react";
import {timeParse} from "d3-time-format"
import {select,line,scaleLinear,scaleTime,extent,axisBottom,axisLeft} from "d3";
import {linedataFunc} from "./data";
class LineChart extends PureComponent{
    state={
        loading:true
    };
    drawChart(){
        let width = 600;
        let height= 500;
        let margin = {top: 10, right: 30, bottom: 30, left: 60};
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const chartdata = linedataFunc();
        console.log(chartdata);
        const svg = select("#lc-svg")
            .append("svg")
            .attr("width","600")
            .attr("height","600")
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        const xextent = extent(chartdata, d=> {
            let date = new Date(timeParse(d.time));
            return date;
        });
        const yextent = extent(chartdata,d => d.value);
        const xScale = scaleTime()
            .domain(xextent)
            .range([0,innerWidth]);
        const yScale = scaleLinear()
            .domain(yextent)
             .range([innerHeight,0]);

        const xAxis = axisBottom()
            .scale(xScale)
            .tickPadding(15)
            .ticks(5)
            .tickSize(-innerHeight);

        const yTicks = 5;
        const yAxis = axisLeft()
            .scale(yScale)
            .ticks(yTicks)
            .tickPadding(15)
            .tickSize(-innerWidth);

        svg.append("path")
            .datum(chartdata)
            .attr("fill","none")
            .attr("stroke","steelblue")
            .attr("stroke-width",2.5)
            .attr("d",line()
                .x((d)=>{
                    return  xScale(new Date(timeParse(d.time)));
                })
                .y((d)=> yScale(d.value)))
        const xAxisG = svg.append('g')
            .attr('transform', `translate(0, ${innerHeight})`);
        const yAxisG = svg.append('g');

        xAxisG.append('text')
            .attr('class', 'axis-label')
            .attr('x', innerWidth / 2)
            .attr('y', 100)
            .text("date");

        yAxisG.append('text')
            .attr('class', 'axis-label')
            .attr('x', -innerHeight / 2)
            .attr('y', -60)
            .attr('transform', `rotate(-90)`)
            .style('text-anchor', 'middle')
            .text("temperature");

        xAxisG.call(xAxis);
        yAxisG.call(yAxis);
    }
    componentDidMount() {
        this.drawChart();
    }

    render(){
        return(
            <div id={"lc-svg"}></div>)
    }
}
export default LineChart;