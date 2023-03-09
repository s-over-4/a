const WS = require('ws')   // the websocket module

const wss = new WS.Server({port: 8081})   // the web socket server™  

wss.on('connection', function connection(s) {
   console.log('there was a connection.')

   const interval = setInterval(() => {
      s.send('Hello, world.')    // send hello world to client every second once connection is established 
   }, 1000)

   s.on('close', () => {
      console.log('there was a disconnection.')
   })

   s.onerror = function () {
      console.log('there was an error.')
   }
})




