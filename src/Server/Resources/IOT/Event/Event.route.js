import { Router } from "express";
import EventController, { getEvents } from "./Event.controller.js";

const router = Router();
// for many sensors
router
	.route("/")
	.get(getEvents)
	.post(SensorController.createMany);

export default router;
