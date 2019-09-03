import React,{PureComponent} from "react";
import {timeParse} from "d3-time-format"
import {select,line,scaleLinear,scaleTime,extent,area,curveCardinal,transition,axisBottom,axisLeft} from "d3";
import {linedataFunc} from "./data";
import "./Linechart.css";
class LineChart extends PureComponent{
    state={
        loading:true
    };
    drawChart(){
        let width = document.querySelector(`.${this.props.containerclassName}`).clientWidth;
        let height = document.querySelector(`.${this.props.containerclassName}`).clientHeight;
        console.log("height,weight", width,height);
        let margin = {top: 10, right: 30, bottom: 20, left: 30};
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const chartdata = linedataFunc();
        console.log(chartdata);
        const svg = select("#lc-svg")
            .append("svg")
            .attr("width",innerWidth)
            .attr("height",innerHeight)
            //.attr('viewBox','-30 -10 '+Math.min(width,height) +' '+Math.min(width,height))
            .attr('viewBox',`-30 -10 ${Math.min(width,height)} ${Math.min(width,height)+40 }`)
            //.attr('viewBox',`-30 -10 100% 100%`)
            .attr('preserveAspectRatio','xMinYMin meet')
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
            .scale(xScale);


        const yAxis = axisLeft()
            .scale(yScale);

        svg.append("path")
            .datum(chartdata)
            .attr("class","area")
            .attr("d", area()
                .x((d)=>xScale(new Date(timeParse(d.time))))
                .y0( innerHeight )
                .y1((d)=> yScale(d.value))
            );

        svg.append("path")
            .datum(chartdata)
            .attr("class","line")
            .attr("d",line()
                .curve(curveCardinal.tension(0.9))
                .x((d)=>xScale(new Date(timeParse(d.time))))
                .y((d)=> yScale(d.value)));

        const xAxisG = svg.append('g')
            .attr('transform', `translate(0, ${innerHeight})`);
        const yAxisG = svg.append('g');

        xAxisG.append('text')
            .attr('class', 'axis-label')
            .attr('x', innerWidth / 2)
            .attr('y', 40)
            .text("⟵ date ⟶");
        console.log(innerHeight,innerWidth);
        yAxisG.append('text')
            .attr('class', 'axis-label')
            .attr('x', innerHeight-20)
            .attr('y', 53)
            .attr('transform', `rotate(90)`)
            //.style('text-anchor', 'middle')
            .text("⟵ temperature in Celsius");

        xAxisG.call(xAxis);
        yAxisG.call(yAxis);
    }
    componentDidMount() {
        this.drawChart();
    }

    render(){
        return(
            <div id={"lc-svg"} ></div>)
    }
}
export default LineChart;