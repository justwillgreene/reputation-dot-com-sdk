const querystring = require("querystring");
module.exports = function (client) {
    return {
        // GetPageMetrics
        // https://api.reputation.com/v3/docs#operation/getPageMetrics
        pageMetrics: function (query) {
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = "page-metrics" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // GetPostMetrics
        // https://api.reputation.com/v3/docs#operation/getPostMetrics
        postMetrics: function (query) {
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = "post-metrics" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // GetAggregatePageMetrics
        // https://api.reputation.com/v3/docs#operation/getAggregatePageMetrics
        aggregatePageMetrics: function (query) {
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = "aggregate-page-metrics" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // GetAggregatePostMetrics
        // https://api.reputation.com/v3/docs#operation/getAggregatePostMetrics
        aggregatePostMetrics: function (query) {
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = "aggregate-post-metrics" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

    }
}