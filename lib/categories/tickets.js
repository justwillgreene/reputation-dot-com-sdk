const querystring = require("querystring");
module.exports = function (client) {
    return {
        // GetTickets
        // https://api.reputation.com/v3/docs#operation/getTickets
        list: function (query) {
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = "tickets" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // SaveTicket
        // https://api.reputation.com/v3/docs#operation/saveTicket
        save: function(ticket){
            let url = "tickets";
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(ticket) })
        },
        // GetQueues
        // https://api.reputation.com/v3/docs#operation/getQueues
        queues: function () {
            let url = "ticket-queues";
            return client.request({ url: url }, { method: 'GET' })
        },
        // GetStages
        // https://api.reputation.com/v3/docs#operation/getStages
        stages: function () {
            let url = "ticket-stages";
            return client.request({ url: url }, { method: 'GET' })
        },
        // GetTicketDefinitions
        // https://api.reputation.com/v3/docs#operation/getTicketDefinitions
        ticketDefinitions: function () {
            let url = "ticket-types";
            return client.request({ url: url }, { method: 'GET' })
        }
    }
}