// server.js
const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const port = parseInt(process.env.PORT, 10) || 3000

const express = require('express')

const myhandler = (req, res)=>{
  //Add assetPrefix support based on the hostname
    if (req.headers.host === 'sffish.me') {
      app.setAssetPrefix('https://sffish.me/demo/')
    } else {
      app.setAssetPrefix('')
    }
    return handler(req, res)
}

app.prepare()
.then(() => {
  const server = express();

  server
  .get('*', (req, res) =>{ 
    return myhandler(req, res) 
  })
  .listen(port)
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
