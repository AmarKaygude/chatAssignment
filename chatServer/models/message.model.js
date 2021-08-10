const mongoose = require('mongoose');
const schema = mongoose.Schema;

const messageSchema = new schema({
     _id: {
        required: true,
        type: String
    },
    message:String,
    message_type:String,
    path:String,
    location:Object,
    created_by: String,
    created_on : Date,
    updated_on : Date, 
}); 

module.exports = mongoose.model('messages', messageSchema);