const querystring = require("querystring");
module.exports = function (client) {
    return {
        // Authorize
        // https://api.reputation.com/v3/docs#operation/authorize
        authorize: function(user){
            let url = "authorize";
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(user) })
        }
    }
}