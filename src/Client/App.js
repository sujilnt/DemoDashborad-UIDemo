import React, { PureComponent } from "react";

import { Card } from "@blueprintjs/core";
// import ReactSVGComponent from 'Components/ReactSVGComponent/ReactSVGComponent'
import LoginPageContainer from "./Components/Login-Page/LoginPageContainer";
import "css/main.css";
import ReactRouterContainer from "./Components/ReactRouter/ReactRouterContainer";

class App extends PureComponent {
	state = {
		loading: true,
	};
	render() {
		console.log("%c APP ", "background: #222; color: #bada55");
		return (
			<div className="app-Container ">
				<div>
					<ReactRouterContainer />
				</div>
			</div>
		);
	}
}
export default App;
