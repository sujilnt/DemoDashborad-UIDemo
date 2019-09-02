import React,{Component} from "react";
import {select} from "d3";
class BasicChart extends Component{
    drawChart(){
        const data = [12, 5, 6, 6, 9, 10];
        const svg = select("#svg")
            .append("svg")
            .attr("width", "100%")
            .attr("height", "100%");
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => {
                console.log("x", d,i * 15);
                return i * 30;
            })
            .attr("y", 0)
            .attr("width", 10)
            .attr("height", (d, i) => d*10)
            .attr("fill", "green");
    }
    componentDidMount() {
        this.drawChart();
    }
    render(){
        console.log("%c Basic Charts ", "background: #222; color: #bada55");
      return <div id={"svg"}></div>;
  }
}

export default  BasicChart;