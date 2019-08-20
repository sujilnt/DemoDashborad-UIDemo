import express from 'express'
import { connect } from './utils/db'
import { loadGzipBundle } from './utils/loadGzipBundle'
import signUP_Router from './Resources/Login-SignUP/Sigup.route.js'
import signIn_Router from './Resources/Login-SignUP/Login.route.js'
import sensor_Router from './Resources/IOT/Sensor/Sensor.route'
import morgan from 'morgan'
import { json, urlencoded } from 'body-parser'
import { protect } from './utils/auth'
import cors from 'cors'
const PORT_NUM = 9001

const app = express()
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/signup', signUP_Router)
// app.use('/signin', signIn_Router)
// protected route starts !
app.use('/api', protect)
app.use('/api/user', signIn_Router)
app.use('/api/sensor', sensor_Router)
// loadGzipBundle func => loading all gzip client bundles
loadGzipBundle(app)
/**
 * start => server starting asybchronous function.
 * connect() => connecting to the database
 * app is listening to Port number , default 9001
 */
export const start = async () => {
  try {
    await connect() // connecting to the database.
    app.listen(PORT_NUM, () => {
      console.log(`App started at port number ${PORT_NUM}`)
    })
  } catch (e) {
    console.error(e)
  }
}

start()
