import { Router } from "express";
import { CreateUser } from "./User.controller";
const router = Router();
router
	.route("/")
	.get(() => console.log("yes"))
	.post(CreateUser);

export default router;
