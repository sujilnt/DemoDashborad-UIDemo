import { Router } from "express";
import { CreateUser } from "./User.controller";

const router = Router();
router.route("/").post(CreateUser);

export default router;
