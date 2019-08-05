import React, { Component } from "react";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Card } from "@blueprintjs/core";
// import ReactSVGComponent from 'Components/ReactSVGComponent/ReactSVGComponent'
import "css/main.css";
import LoginPageContainer from "./Components/LoginPage/LoginPageContainer";
class App extends Component {
	state = {
		loading: true,
	};
	render() {
		return (
			<div className="app-Container ">
				<Card className="app-Conta-child">
					<LoginPageContainer />
				</Card>
			</div>
		);
	}
}
export default App;
