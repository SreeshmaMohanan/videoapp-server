const jsonServer=require('json-server')//importing json server

//create json server using json-server
const meadiaPlayerServer = jsonServer.create()

//create path for json file
const router = jsonServer.router("db.json")
//call middle ware
const middleware=jsonServer.defaults()

//setup port for server appli
const port = 4000 || process.env.PORT

//use middleware  &router
meadiaPlayerServer.use(middleware)
meadiaPlayerServer.use(router)
//server should listen for req from frnd end
meadiaPlayerServer.listen(port, ()=>{console.log(`JSON Server is running on : ${port}, and waiting for request!!!`)})