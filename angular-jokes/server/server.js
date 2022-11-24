const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()


server.use(middlewares)

server.use(jsonServer.bodyParser)

// Add custom routes before JSON Server router
server.get('/', (req, res) => {
    const user = {
        id:"1",
        username:"a",
        password:"b"
    }
    res.jsonp(user)
})

server.put('/jokes/{id}',(req, res)=>{
    router.put(req.body)
    res.jsonp(req.body)
})

server.post('/jokes', (req, res) => {
    console.log(req.body)
    router.post(req.body)
    res.jsonp(res.body)
})


// Use default router
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
