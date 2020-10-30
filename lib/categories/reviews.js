const querystring = require("querystring");
module.exports = function (client) {
    return {
        // GetReviews
        // https://api.reputation.com/v3/docs#operation/getMetrics
        list: function (query) {
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = "reviews" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // GetReviewResponses
        // https://api.reputation.com/v3/docs#operation/getReviewResponses
        responses: function (reviewId) {
            let url = `reviews/${reviewId}/responses`;
            return client.request({ url: url }, { method: 'GET' })
        },
        // RespondToReview
        // https://api.reputation.com/v3/docs#operation/respondToReview
        respond: function(reviewId, response){
            let url = `reviews/${reviewId}/responses`;
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(response) })
        }
    }
}