const querystring = require("querystring");
module.exports = function (client) {
    return {
        // GetCredentials
        // https://api.reputation.com/v3/docs#operation/getCredentials
        list: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "credentials" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // SaveCredential
        // https://api.reputation.com/v3/docs#operation/saveCredential
        save: function(credential){
            let url = "credentials";
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(credential) })
        },
        // GetCredential
        // https://api.reputation.com/v3/docs#operation/getCredential
        single: function(credentialId) {
            let url = `credentials/${credentialId}`;
            return client.request({ url: url }, { method: 'GET' })
        },
        // GetOauthStatus
        // https://api.reputation.com/v3/docs#operation/getOauthStatus
        oauthStatus: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "credentials/oauth" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // GetPasswordStatus
        // https://api.reputation.com/v3/docs#operation/getPasswordStatus
        passwordStatus: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "credentials/password" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
    }
}