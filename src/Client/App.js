import React, { PureComponent } from "react";
import ReactRouterContainer from "./Components/ReactRouter/ReactRouterContainer";
import "css/main.css";

class App extends PureComponent {
	state = {
		loading: true,
	};
	render() {
		console.log("%c APP ", "background: #222; color: #bada55");
		return (
			<div className="app-Container ">
				<ReactRouterContainer />
			</div>
		);
	}
}
export default App;
