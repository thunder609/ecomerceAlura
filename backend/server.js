const jsonServer=require('json-server');
const server = jsonServer.create();
const router =jsonSerer.router('data.json');
const  midlewares=jsonServer.defaults();

server.use(midlewares);
server.use(router);
const port =  process.env.port || 4000;
server.listen(port , ()=>console.log("Servidor en linea"));