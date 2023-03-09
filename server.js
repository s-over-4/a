const webSocket = require('ws');  // the websocket module
const wss = new webSocket.Server({port: 8081});  // the web socket server™  

class Packet {
   constructor(ws, type, data) {
      this.ws = ws;
      this.type = type;
      this.time = new Date().getTime();
      this.data = data;

      this.packet = {
         "type": this.type,
         "time": this.time,
         "data": this.data
      }
   }

   

   send() {
      this.ws.send(JSON.stringify(this.packet));
   }
}


wss.on('connection', function connection(ws) {
   console.log('there was a connection.')

   let hello = new Packet(ws, "hello", null);
   hello.send();

   // const interval = setInterval(() => {
   //    ws.send('Hello, world.')    // send hello world to client every second once connection is established 
   // }, 1000)

   ws.on('close', () => {
      console.log('there was a disconnection.')
   })

   ws.onerror = function () {
      console.log('there was an error.')
   }
})




