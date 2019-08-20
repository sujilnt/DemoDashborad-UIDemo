import { Router } from 'express'
import SensorController from './Sensor.controller.js'

const router = Router()
// for many sensors
router
  .route('/')
  .get(SensorController.getMany)
  .post(SensorController.createOne)

// for single sensors
router
  .route('/:id')
  .get(SensorController.getOne)
  .post(SensorController.createOne)

export default router
