const querystring = require("querystring");
module.exports = function (client) {
    return {
        // GetPageMetrics
        // https://api.reputation.com/v3/docs#operation/getPageMetrics
        pageMetrics: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "page-metrics" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // GetPostMetrics
        // https://api.reputation.com/v3/docs#operation/getPostMetrics
        postMetrics: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "post-metrics" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // GetAggregatePageMetrics
        // https://api.reputation.com/v3/docs#operation/getAggregatePageMetrics
        aggregatePageMetrics: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "aggregate-page-metrics" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // GetAggregatePostMetrics
        // https://api.reputation.com/v3/docs#operation/getAggregatePostMetrics
        aggregatePostMetrics: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "aggregate-post-metrics" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

    }
}