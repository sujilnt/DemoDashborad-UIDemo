import { Router } from 'express'
import SensorController from './Sensor.controller.js'

const router = Router()
// for many sensors
router
  .route('/')
  .get(SensorController.getManySensor)
  .post(SensorController.createMany);

// for single sensors
router
  .route('/:id')
  .get(SensorController.getOne)
  .post(SensorController.createOne)
  .put(SensorController.updateOne)
  .delete(SensorController.removeOne);

export default router
