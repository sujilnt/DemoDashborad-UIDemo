import { Router } from "express";
import { CreateUser } from "./User.controller";
import { User } from "./User.model";
const controller = async (req, res) => {
	console.log("controller called");
	console.log(req.body, res.status);
	try {
		const { email, password } = req.body;
		await User.create({
			email,
			password,
		});
		console.log("called");
		res.status(200).json({ message: "hello" });
	} catch (e) {
		console.log(e);
	}
};
const router = Router();
router
	.route("/")
	.get(controller)
	.post(CreateUser);

export default router;
