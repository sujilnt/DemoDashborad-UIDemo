import { Router } from "express";
import { CreateUser } from "./User.controller";
import { Controller } from "../CrudController.js";
const router = Router();
router
	.route("/")
	.get(Controller.findOne)
	.post(CreateUser);

export default router;
