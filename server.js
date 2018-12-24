// server.js
const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const port = parseInt(process.env.PORT, 10) || 3000

// With express
const express = require('express')
app.prepare().then(() => {
  express().use(handler).listen(port)
})

// Without express
// const {createServer} = require('http')
// app.prepare().then(() => {
//   createServer(handler).listen(3000)
// })