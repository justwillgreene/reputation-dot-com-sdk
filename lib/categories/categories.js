const querystring = require("querystring");
module.exports = function (client) {
    return {
        // GetCategories
        // https://api.reputation.com/v3/docs#operation/getCategories
        list: function (query) {
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = "categories" + qs
            return client.request({ url: url }, { method: 'GET' })
        }
    }
}