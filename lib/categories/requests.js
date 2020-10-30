const querystring = require("querystring");
module.exports = function (client) {
    return {
        // GetMetrics
        // https://api.reputation.com/v3/docs#operation/getMetrics
        metrics: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "requests/metrics" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // GetRequestUrls
        // https://api.reputation.com/v3/docs#operation/getRequestUrls
        requestUrls: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "requests/request-urls" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // SendEmail
        // https://api.reputation.com/v3/docs#operation/sendEmail
        sendEmail: function(request){
            let url = "requests/send-email";
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(request) })
        },
        // SendSms
        // https://api.reputation.com/v3/docs#operation/sendSms
        sendEmail: function(request){
            let url = "requests/send-sms";
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(request) })
        },
        // UnsubscribeEmail
        // https://api.reputation.com/v3/docs#operation/unsubscribeEmail
        unsubscribeEmail: function(request){
            let url = "requests/unsubscribe-email";
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(request) })
        },
        // UnsubscribePhone
        // https://api.reputation.com/v3/docs#operation/unsubscribePhone
        unsubscribePhone: function(request){
            let url = "requests/unsubscribe-phone";
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(request) })
        },
        // GetUnsubscribes
        // https://api.reputation.com/v3/docs#operation/getUnsubscribes
        unsubscribes: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "requests/unsubscribes" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
    }
}