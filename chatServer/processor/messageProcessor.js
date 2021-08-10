
const common = require("../utils/common");
const {sendSuccess,sendError,validate} = require("../utils/util");
let messageModel; 


exports.init = ()=>{
  messageModel = require("../models/message.model");
}

exports.createMessage = (socket,iObj,cb)=>{
try{
    console.log(iObj);
    console.log(typeof(iObj));
    let {data} = iObj;
    if (!validate(iObj, ['message','message_type'])) {
       // return sendError(res, 'Invalid request parameters');
    }
    const ts = new Date();
    let _id = common.public_conv + "_";
    _id = _id + Date.now();
    data['created_on'] = ts;
    data['updated_on'] = ts;
    data["_id"] = _id;
    return messageModel.create(data)
    .then((result)=>{
        console.log("successfuly added")
        console.log(result);
        sendSuccess(socket,result,iObj);
        if(cb){
            cb(socket);
        }
    }).catch((err)=>{
       console.log(err);
    })
}catch(err){
  console.log(err);
}
}

exports.getMessage = (socket,iObj)=>{
try{
    return messageModel.find({})
    .then((result)=>{
       sendSuccess(socket,result,iObj);
    }).catch((err)=>{
        console.log(err);
    })
  
}catch(err){

}
}