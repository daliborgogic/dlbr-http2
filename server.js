'use strict'

const fs = require('fs')
const path = require('path')
const http2 = require('http2')
const resolve = file => path.resolve(__dirname, file)
const renderer = require('vue-server-renderer').createRenderer()

global.Vue = require('vue')

const isProd = process.env.NODE_ENV === 'production'
const template = fs.readFileSync(resolve('./src/index.template.html'), 'utf-8')

const templateSections = template.split('<div id="app"></div>')
const preAppHTML = templateSections[0]
const postAppHTML = templateSections[1]


const options = {
  key: fs.readFileSync('keys/privkey.pem', 'utf-8'),
  cert: fs.readFileSync('keys/cert.pem', 'utf-8')
}

const server = http2.createSecureServer(options)

server.on('stream', (stream, requestHeaders) => {
const ssr = renderer.renderToStream(require('./src/app')())
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  })

  stream.write(preAppHTML)

  stream.pushStream({ ':path': '/favicon.ico' }, (pushStream => {
    pushStream.respond({
      'content-type': 'image/x-icon',
      ':status': 200
    })
    pushStream.end(fs.readFileSync('public/favicon.ico', 'utf-8'))
  }))

  stream.pushStream({ ':path': '/vue.js' }, (pushStream => {
    pushStream.respond({
      'content-type': 'application/javascript',
      ':status': 200
    })
    pushStream.end(fs.readFileSync('src/vue.js', 'utf-8'))
  }))

  stream.pushStream({ ':path': '/app.js' }, (pushStream => {
    pushStream.respond({
      'content-type': 'application/javascript',
      ':status': 200
    })
    pushStream.end(fs.readFileSync('src/app.js', 'utf-8'))
  }))



  ssr.on('data', (chunk) => {
      stream.write(chunk)
    })

  ssr.on('end', () => {
    stream.end(postAppHTML)
  })


})

server.listen(443, () =>
  console.log(`Secure server started at 0.0.0.0:443`)
)

