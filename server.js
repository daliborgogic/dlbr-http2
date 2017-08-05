'use strict'
const fs = require('fs')
const http2 = require('http2')

const options = {
  key: fs.readFileSync('privkey.pem'),
  cert: fs.readFileSync('cert.pem')
}

const server = http2.createSecureServer(options)

server.on('stream', (stream, requestHeaders) => {
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  })

  stream.pushStream({ ':path': '/main.js' }, (pushStream => {
    pushStream.respond({
      'content-type': 'application/javascript',
      ':status': 200
    })
    pushStream.end('console.log(\'Pushed!\')')
  }))

  stream.end('<h1>Hello World</h1><script src="main.js"></script>')

})

server.listen(443)
