import React from "react";
import ReactDOM from "react-dom";
import { Transition, animated } from "react-spring";

import "./styles.css";

function Sub() {
	return <div style={{ backgroundColor: "pink", height: 100 }}>Hey</div>;
}

export default class Transitionloader extends React.Component {
	state = { toggle: false };
	handleClick = () => {
		this.setState({ toggle: !this.state.toggle });
	};
	render() {
		return (
			<div className="App">
				{this.state.toggle ? <div>true</div> : <div>false</div>}
				<button onClick={this.handleClick}>button</button>
				<Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
					{this.state.toggle &&
						(style => (
							<animated.div style={{ ...style, background: "orange" }}>
								<Sub />
							</animated.div>
						))}
				</Transition>
			</div>
		);
	}
}
