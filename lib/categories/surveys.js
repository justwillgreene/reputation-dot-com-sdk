const querystring = require("querystring");
module.exports = function (client) {
    return {
        // GetSurveyResults
        // https://api.reputation.com/v3/docs#operation/getSurveyResults
        list: function (query) {
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = "survey-results" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // SaveSurveyResult
        // https://api.reputation.com/v3/docs#operation/saveSurveyResult
        save: function(surveyResult){
            let url = "survey-results";
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(surveyResult) })
        },
        // GetSurveyResult
        // https://api.reputation.com/v3/docs#operation/getSurveyResult
        single: function (surveyId, query) {
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = `survey-results/${surveyId}${qs}`;
            return client.request({ url: url }, { method: 'GET' })
        }
    }
}