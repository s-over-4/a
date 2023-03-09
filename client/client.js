const WS = require('ws')

const s = new WS('ws://localhost:8081')

s.on('open', function open() {
   s.on('message', function message(data) {
      console.log(`${data}`)
   })
})
