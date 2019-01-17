const routes = module.exports = require('next-routes')()
routes
.add('about')
.add('index', '/')
.add('post', '/post/:key')
