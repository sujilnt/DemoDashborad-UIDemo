import express from 'express'
import expressStaticGzip from 'express-static-gzip'
import { connect } from './utils/db'

const PORT_NUM = 9015
const app = express()

var options = {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders: function (res) {
    res.setHeader('Cache-Control', 'public, max-age=31536000')
  }
}

app.get('/', expressStaticGzip('./ClientBundle', options), (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

// app.use(expressStaticGzip('./ClientBundle', options))

export const start = async () => {
  try {
    await connect()
    app.listen(PORT_NUM, () => {
      console.log(`App staeted at port number ${PORT_NUM}`)
    })
  } catch (e) {
    console.error(e)
  }
}

start()
