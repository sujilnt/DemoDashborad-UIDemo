import { Router } from "express";
import EventController, { getEvents } from "./Event.controller.js";

const router = Router();
// for many sensors
router
	.route("/:sensorid")
	.get(getEvents)
	.post(EventController.createOne);

router.route("/many/:sensorid")
	.post(EventController.createMany);
export default router;
