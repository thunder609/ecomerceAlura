const jsonServer= require('json-server');
const server =jsonServer.create();
const router =jsonServer.router('data.json');
const middlewares=jsonServer.defaults();

server.use(middlewares);
server.use(router);
const port = process.env.PORT || 3000;

server.listen(port, ()=>console.log("servidor en linea"+app.get('port')))