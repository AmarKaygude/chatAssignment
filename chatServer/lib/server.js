const express = require("express");
const http = require("http");
const socketio = require("socket.io");
var path = require('path');
var app = express();
const server = http.createServer(app);
const io = socketio(server,{
    cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"]
  }
});
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
res.header("Acess-Control-Allow-Origin","*")
res.header("Acess-Control-Allow-header","*")
console.log(req.method)
if(req.method == "OPTION"){
res.status(200);
}
next();
})
app.get("/",(req,res)=>{
     res.sendFile("/index.html");
 
})


exports.startServer = (cb)=>{
  server.listen(8041,()=>{
    console.log("Server is running http://localhost:8041")
    if(cb){
        let obj = {
            io
        }
        cb(obj);
    }
  });
}