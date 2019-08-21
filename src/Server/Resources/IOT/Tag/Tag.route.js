import { Router } from 'express'
import TagController from './Tag.controller'
import { createManyTag } from './Tag.controller'
const router = Router()
// pass object ID
router
  .route('/:id')
  .get(TagController.getMany)
  .post(createManyTag)
  .delete(() => console.log('data'))

export default router
