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

// background sync for saving post requests
const bgSyncPlugin = new workbox.backgroundSync.Plugin('FailedRequests', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

// saving adding of Post Requests
workbox.routing.registerRoute(
    "http://localhost:9001/api/sensor/" ,(new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin]
    })),
    "POST"
);

/*
const matchCb =({url,event})=>{
    console.log(url, "SERVICE WORKER URL !!",url.pathname.indexOf("/api/sensor/events/")>=0);
  return(url.pathname.indexOf("/api/sensor/events/")>=0);
};

//workbox.routing.registerRoute(matchCb,(new workbox.strategies.NetworkFirst()));

self.addEventListener("fetch",(event)=>{
   const responseUrl = new URL(event.request.url);
   if(responseUrl.pathname.indexOf("/api/sensor/events/")>=0){
       const network_First = new workbox.strategies.NetworkFirst({
           cacheName: "sujil",
           matchOptions:{
               ignoreSearch:true
           }
       });
   }
});

 */