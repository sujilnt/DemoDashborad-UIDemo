const version = new Date().toISOString();
// precaching the all ss
workbox.precaching.precacheAndRoute(self.__precacheManifest,{
    ignoreURLParametersMatching: [/.*/]
});

// caching all the data
workbox.routing.registerRoute(
    /\.(?:js|css|html)$/,  (new workbox.strategies.StaleWhileRevalidate())
);

// caching all the sensor informating in the cache
workbox.routing.registerRoute(
    "http://localhost:9001/api/sensor/" ,(new workbox.strategies.StaleWhileRevalidate())
);