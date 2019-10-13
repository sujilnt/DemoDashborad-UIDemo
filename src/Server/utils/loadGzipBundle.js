import expressStaticGzip from 'express-static-gzip'
/**
 * loadGzipBundle => passing all the webpack client-gzipped-bundle to express-static-gzip
   package.
 * @params app is express app
 */

export const loadGzipBundle = app => {
  var options = {
    enableBrotli: false,
    orderPreference: ['br', 'gz'],
    setHeaders: function (res) {
      res.setHeader('Cache-Control', 'public, max-age=31536000')
    }
  };
  // app.use(expressStaticGzip('./ClientBundle', options)) OR
  app.get('/*', expressStaticGzip('./ClientBundle', options), (req, res) => {
    res.send(req.body)
  })
};
