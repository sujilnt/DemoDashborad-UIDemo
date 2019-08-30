import "css/main.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import storeFactory from "./src/Client/store/storeFactory.js";
import State from "./src/Client/store/intialstate";
import ReactRouterContainer from "./src/Client/Components/ReactRouter/ReactRouterContainer";
console.log(State, "import state");
const persisted_state = JSON.parse(localStorage.getItem("USER_ID"));
const store = storeFactory(persisted_state);
store.subscribe(()=>{
    console.log('%c Store Data ', 'background: #222; color: white', store.getState());
});

ReactDOM.render(
	<Provider store={store}>
		<ReactRouterContainer />
	</Provider>,
	document.getElementById("root")
);
if ("serviceWorker" in navigator) {
	window.addEventListener("load", async () => {
		try {
			await navigator.serviceWorker.register("./sw-dev.js");
		} catch (e) {
			console.error("service not registered", e);
		}
	});
}
