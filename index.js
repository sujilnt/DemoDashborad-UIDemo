import "css/main.css";
import React from "react";
import ReactDOM from "react-dom";
import ReactRouter from "Components/ReactRouter/ReactRouter.js";

ReactDOM.render(<ReactRouter />, document.getElementById("root"));
if ("serviceWorker" in navigator) {
	window.addEventListener("load", async () => {
		try {
			await navigator.serviceWorker.register("./sw-dev.js");
		} catch (e) {
			console.error("service not registered", e);
		}
	});
}
