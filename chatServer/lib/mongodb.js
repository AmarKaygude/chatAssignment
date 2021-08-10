const mongoose = require('mongoose');
const mongoDbUri = 'mongodb://127.0.0.1:27017/chat_app_db';
let callBack;
exports.initDatabase = (cb)=>{
 mongoose.connect(mongoDbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
  callBack = cb;
}

mongoose.connection.on('connected', () => {
    console.log(`app is connected to ${mongoDbUri}`);
    if(callBack &&  typeof callBack == 'function'){
        callBack();
    }
});

mongoose.connection.on('error', err => {
    console.log('error while connecting to mongodb', err);
});


