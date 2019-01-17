// server.js
const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const handleNextRequests = app.getRequestHandler()
const port = parseInt(process.env.PORT, 10) || 3000

const express = require('express')
app.prepare().then(() => {
	// const server = micro((req, res) => {
 //    // Add assetPrefix support based on the hostname
 //    if (req.headers.host === 'sffish.me') {
 //      app.setAssetPrefix('http://sffish.me/demo/')
 //    } else {
 //      app.setAssetPrefix('')
 //    }

 //    handleNextRequests(req, res)
 //  })

 //  server.listen(port, (err) => {
 //    if (err) {
 //      throw err
 //    }

 //    console.log(`> Ready on http://localhost:${port}`)
 //  })
  express()
  .use((req, res) =>{
		//Add assetPrefix support based on the hostname
    if (req.headers.host === 'sffish.me') {
      app.setAssetPrefix('http://sffish.me/demo/')
    } else {
      app.setAssetPrefix('')
    }
    handleNextRequests(req, res)
  })
  .use(handler)
  .listen(port)
})
