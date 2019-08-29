import "css/main.css";
import React from "react";
import ReactDOM from "react-dom";
import ReactRouter from "Components/ReactRouter/ReactRouter.js";
import { Provider } from "react-redux";
import storeFactory from "./src/Client/store/storeFactory.js";
import State from "./src/Client/store/intialstate";
console.log(State, "import state");
const user = JSON.parse(localStorage.getItem("USER_ID"));
console.log(user);
const store = storeFactory({user:user, isAuthenticated: false});

console.log("This is a store", store);
ReactDOM.render(
	<Provider store={store}>
		<ReactRouter />
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
