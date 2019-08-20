import jwt from 'jsonwebtoken'
import { User } from '../Resources/Login-SignUP/User.model'
import { DEV_jwt, DEV_jwtExp } from 'babel-dotenv'
const secrets = {
  jwt: DEV_jwt,
  jwtExp: DEV_jwtExp
}
export const newToken = user => {
  return jwt.sign({ uid: user.uid }, secrets.jwt, {
    expiresIn: secrets.jwtExp
  })
}

export const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, secrets.jwt, (err, payload) => {
      if (err) return reject(err)
      resolve(payload)
    })
  })

export const protect = async (req, res, next) => {
  const bearer = req.headers.authorization
  if (!bearer || !bearer.startsWith('Bearer ')) {
    return res.status(401).end()
  }
  // "Bearer  token"
  const token = bearer.split('Bearer ')[1].trim()
  let payload
  try {
    payload = await verifyToken(token)
  } catch (e) {
    return res.status(401).end()
  }
  const user = await User.find({ uild: payload.uid })
    .select('-password')
    .lean()
    .exec()

  if (!user) {
    return res.status(401).end()
  }

  req.user = user
  next()
}
