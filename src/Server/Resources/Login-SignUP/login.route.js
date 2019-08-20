import { Router } from 'express'
import { signIn, getUser } from './User.controller.js'

const router = Router()
console.log('router called')
router
  .route('/')
  .get(getUser)
  .post(signIn)

export default router
