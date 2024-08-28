const http = require('node:http')
const { findAvailablePort } = require('./10.free-port.js')

const desiredPort = process.env.PORT

// $env:PORT=11223; node .\native-modules\9.http.js
console.log(process.env.PORT)

const server = http.createServer((request, response) => {
  console.log('Request received')
  response.end('Hello, world')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})
