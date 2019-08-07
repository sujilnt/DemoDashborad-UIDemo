import express from 'express'
import expressStaticGzip from 'express-static-gzip'
const app = express()

app.get('/api', (req, res) => {
  res.send({ data: 'hi sujil' })
})
let testdata = { '1': 1 }
var options = {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders: function (res) {
    res.setHeader('Cache-Control', 'public, max-age=31536000')
  }
}

console.log('testingsdsdvsvsdvdsvs', { ...testdata })
app.use(expressStaticGzip('./ClientBundle', options))
app.listen('9001', () => {
  console.log('App started at port number 9001')
})
