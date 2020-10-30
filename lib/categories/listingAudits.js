const querystring = require("querystring");
module.exports = function (client) {
    return {
        // GetListingAudits
        // https://api.reputation.com/v3/docs#operation/getListingAudits
        list: function (query) {
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = "listing-audits" + qs
            return client.request({ url: url }, { method: 'GET' })
        }
    }
}