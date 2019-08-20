import { Router } from 'express'
import SensorController from './Sensor.controller.js'
const controller = async (request, response) => {
  console.log('request value', request)
}

const router = Router()
router
  .route('/')
  .get(controller)
  .post(SensorController.createOne)

export default router
