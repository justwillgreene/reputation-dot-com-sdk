const querystring = require("querystring");
module.exports = function (client) {
    return {
        // GetTenants
        // https://api.reputation.com/v3/docs#operation/getTenants
        list: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "tenants" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // SaveTenant
        // https://api.reputation.com/v3/docs#operation/saveTenant
        save: function(tenant) {
            let url = "tenants";
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(tenant) })
        },
        // GetTenant
        // https://api.reputation.com/v3/docs#operation/getTenant
        single: function(tenantId) {
            let url = `tenants/${tenantId}`;
            return client.request({ url: url }, { method: 'GET' })
        },
        // PauseTenant
        // https://api.reputation.com/v3/docs#operation/pauseTenant
        pause: function(tenantId){
            let url = `tenants/${tenantId}/pause`;
            return client.request({ url: url }, { method: 'PUT'})
        },
        // UnpauseTenant
        // https://api.reputation.com/v3/docs#operation/pauseTenant
        unpause: function(tenantId){
            let url = `tenants/${tenantId}/unpause`;
            return client.request({ url: url }, { method: 'PUT'})
        }
    }
};