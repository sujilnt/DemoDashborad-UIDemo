import React,{Component} from "react";
import Loader from "../Loader/Loader";
import BasicChart from "../../Chart/BasicChart";
import LineChart from "../../Chart/LineChart/LineChart";
class DashboardPage extends Component {
    state={
        isloading: true
    };

    render() {
        const {isloading}=this.state;
       return !isloading ? (<Loader/>):(
            <div>
                <LineChart/>
            </div>
        )
    }
}
export default DashboardPage;
