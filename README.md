# Negligible Matters

Negligible Matters is my poem website, which is also a demo for SSR(server-side-rendering) pages, build with [Next.js](https://nextjs.org/). It loads poems dynamically from `*.md` files in the `/markdown` directory, and renders poem pages on server side, so that they look like statically hosted. Content of poems can be easily changed via editing the `*.md` files.  

## Demo
https://sffish.me/demo/



## Install
```
npm  install
```

### start the sever in development
```
node server.js
```
The site will be served at `localhost:3000/`.


### start the sever in production
```
npm run build
```

```
npm run start
```

The site will be served at `localhost:3000/`.

### Change the Route

check `routes.js`

