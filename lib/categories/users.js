const querystring = require("querystring");
module.exports = function (client) {
    return {
        // GetUsers
        // https://api.reputation.com/v3/docs#operation/getUsers
        list: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "users" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // SaveUser
        // https://api.reputation.com/v3/docs#operation/saveUser
        save: function(user){
            let url = "users";
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(user) })
        },
        // GetUser
        // https://api.reputation.com/v3/docs#operation/getUser
        single: function(userId) {
            let url = `users/${userId}`;
            return client.request({ url: url }, { method: 'GET' })
        },
    }
}