import { Router } from 'express'
import TagController from './Tag.controller'
import { createManyTag } from './Tag.controller'
const router = Router()
// pass object ID
router
  .route('/:id')
  .get(TagController.getMany) // sensor_id
  .post(createManyTag) // sensor_id
  .delete(TagController.removeOne) // use tag _id to delete a tag

export default router
