const common = require("../utils/common");
const messageProcessor = require("../processor/messageProcessor");
const actionPerformer = require("./actionPerformer");
exports.initSocket = (iObj)=>{
    common.socketIo = iObj.io;
    io = iObj.io;
    io.on('connection', function(socket){
    console.log("connection..done");
    socket.on("server_operation",(iObj)=>{
       console.log("iObj",iObj);
       socket.join("private_conversation");
       actionPerformer.processRequest(iObj,socket);
      
    })

  });
   io.on("message",(msg)=>{
      console.log(msg)
   })
}