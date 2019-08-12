import { Router } from 'express'
const controller = (req, res) => {
  res.send({ message: 'hello' })
}
const router = Router()
router
  .route('/')
  .get(controller)
  .post(controller)

export default router
