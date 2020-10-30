const querystring = require("querystring");
module.exports = function (client) {
    return {
        // RunReport
        // https://api.reputation.com/v3/docs#operation/runReport
        run: function(reportId, report){
            let url = `reports/${reportId}/run`;
            return client.request({ url: url }, { method: 'PUT', body: JSON.stringify(report) })
        }
    }
}