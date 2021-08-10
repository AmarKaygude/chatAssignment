const messageProcess = require("../processor/messageProcessor");
exports.processRequest = (iObj,socket)=>{
switch(iObj.action){
    case "sendMessage": messageProcess.createMessage(socket,iObj,(iSocket)=>{
                         socket.to("room1").emit(/* ... */);
                        });
                        break;
    case "getMessages" : messageProcess.getMessage(socket,iObj);
                         break;                     
}
}