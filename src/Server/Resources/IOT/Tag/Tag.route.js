import { Router } from "express";
import { removeOneTag,getAllTags,getTagofEachSensor } from "./Tag.controller";
import { createManyTag } from "./Tag.controller";
const router = Router();
// pass object ID
router
	.route("/all")
	.get(getAllTags);
router
	.route("/:id")
	.get(getTagofEachSensor) // sensor_id
	.post(createManyTag) // sensor_id
	.delete(removeOneTag); // use tag _id to delete a tag

export default router;
