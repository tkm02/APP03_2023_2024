const http = require("http") 
const app = require("./main") 
const dotenv = require("dotenv");

 
dotenv.config({path:"process.env"})
const port = process.env.PORT



const server = http.createServer(app);

server.on('listening', () => {
  console.log('====================================');
  console.log('Listening on ' + port);
  console.log(`http://localhost:${port}/`);
  console.log('====================================');
}); 

server.listen(port);
