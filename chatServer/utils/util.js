
module.exports = {
    sendSuccess: (socket,data,iObj) => {
        console.log(data)
        socket.emit("server_response",{ error: 0,server_action:iObj.action+"_server", message: 'Success', data: data });
    },

    sendError: (res, msg, data) => {
        console.log(data)
        return res.response({ error: 1, message: msg, data: data });
    },

    validate: (obj, keys) => {
        for (const key of keys) {
            if (!obj[key]) { return false; }
        }
        return true;
    }
};