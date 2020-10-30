const querystring = require("querystring");
module.exports = function (client) {
    return {
        // GetResult
        // https://api.reputation.com/v3/docs#operation/getResult
        getResult: function (query) {
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = "surveys2-results" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // SaveResult
        // https://api.reputation.com/v3/docs#operation/saveResult
        save: function(surveyResult){
            let url = "surveys2-results";
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(surveyResult) })
        },
        // CreateUrlFromEncrypted
        // https://api.reputation.com/v3/docs#operation/createUrlFromEncrypted
        createUrlFromEncrypted: function(body, query){
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = "surveys2-results/create-url-from-encrypted" + qs;
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(body) })
        }
    }
}