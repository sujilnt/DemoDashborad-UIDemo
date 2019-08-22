import dweetClient from "node-dweetio";
const dweetio = new dweetClient();

export const realtime = () => {
	dweetio.listen_for("OptimisedBuildings", dweet => {
		console.log("dweet.io is called ", dweet, "background: #222; color: #bada55");
	});
};
