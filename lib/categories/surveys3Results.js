const querystring = require("querystring");
module.exports = function (client) {
    return {
        // Retrieves a survey result
        // https://api.reputation.com/v3/docs#tag/surveys3-results%2Fpaths%2F~1surveys3-results~1%7BsurveyID%7D%2Fget
        single: function(surveyId, query){
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = `surveys3-results/${surveyId}${qs}`;
            return client.request({ url: url }, { method: 'GET' })
        }, 
        // Saves a survey result
        // https://api.reputation.com/v3/docs#tag/surveys3-results%2Fpaths%2F~1surveys3-results%2Fpost
        save: function(survey){
            let url = "surveys3-results";
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(survey) })
        },
    }
}