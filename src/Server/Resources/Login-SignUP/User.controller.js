import { User } from './User.model'
export const CreateUser = model => async (request, response) => {
  console.log('createUser function is called')
  try {
    console.log('request send', request.body)
    response.send({ done: 'ok' })
    /* await User.create({
      email: request.body.email,
      name: request.body.name,
      password: request.body.password
    }).exec()
    response.status(200).json({
      success: 'ok'
    }) */
  } catch (e) {
    response.status(400).end()
  }
}
