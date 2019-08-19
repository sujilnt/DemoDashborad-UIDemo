import { Router } from "express";
import { signIn } from "./User.controller.js";

const router = Router();
console.log("router called");
router.route("/").post(signIn);

export default router;
