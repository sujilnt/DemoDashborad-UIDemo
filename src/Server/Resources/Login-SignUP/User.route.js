import { Router } from "express";
import { CreateUser } from "./User.controller";
const controller = (req, res) => {
	res.send({ message: "hello" });
};
const router = Router();
router
	.route("/")
	.get(controller)
	.post(CreateUser);

export default router;
