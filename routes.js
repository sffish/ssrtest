const routes = module.exports = require('next-routes')()
const getPath = (path)=>{
	if (process.env.NODE_ENV === 'production')
		return `/demo${path}`
	else 
		return path
}

routes
.add('about')
.add('index', getPath('/') )
.add('post', getPath('/post/:key') )
