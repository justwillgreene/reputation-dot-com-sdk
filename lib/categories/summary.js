const querystring = require("querystring");
module.exports = function (client) {
    return {
        // GetSummary
        // https://api.reputation.com/v3/docs#operation/getSummary
        list: function (query) {
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = "summary" + qs
            return client.request({ url: url }, { method: 'GET' })
        }
    }
}