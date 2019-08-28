import React, { PureComponent } from "react";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Card } from "@blueprintjs/core";
// import ReactSVGComponent from 'Components/ReactSVGComponent/ReactSVGComponent'
import LoginPageContainer from "./Components/Login-Page/LoginPageContainer";
import "css/main.css";

class App extends PureComponent {
	state = {
		loading: true,
	};
	render() {
		console.log("%c APP ", "background: #222; color: #bada55");
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
