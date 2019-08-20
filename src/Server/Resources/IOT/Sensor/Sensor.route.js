import { Router } from 'express'

const controller = async (request, response) => {
  console.log('request value', request)
}

const router = Router()
router
  .route('/')
  .get(controller)
  .post(controller)

export default router
