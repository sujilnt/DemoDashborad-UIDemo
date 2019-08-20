import { Router } from "express";

const router = Router();
router.route("/sensor").post(() => console.log("sensor tag "));

export default router;
