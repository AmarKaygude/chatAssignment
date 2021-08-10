const app = require("./lib/server");
const socketserver = require("./lib/serverSocket");
const db = require("./lib/mongodb");
const messageprocessor = require("./processor/messageProcessor");
app.startServer((iObj)=>{
    socketserver.initSocket(iObj);
    db.initDatabase(()=>{
        console.log("DB setup done..");
        messageprocessor.init();
    })
})