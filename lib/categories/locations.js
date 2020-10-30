const querystring = require("querystring");
module.exports = function (client) {
    return {
        // GetLocations
        // https://api.reputation.com/v3/docs#operation/getLocations
        list: function (query) {
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = "locations" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // SaveLocations
        // https://api.reputation.com/v3/docs#operation/saveLocation
        save: function (location, query) {
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = "locations" + qs
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(location)  })
        },
        // SearchLocations
        // https://api.reputation.com/v3/docs#operation/searchLocations
        getSearch: function (query) {
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = "locations-search" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // SearchLocations
        // https://api.reputation.com/v3/docs#operation/searchLocations
        postSearch: function(locationSearch){
            let url = "locations-search";
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(locationSearch) })
        },
        // SearchFacetedLocations
        // https://api.reputation.com/v3/docs#operation/searchFacetedLocations
        searchFaceted: function (query) {
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = "locations-faceted-search" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // GetLocation
        // https://api.reputation.com/v3/docs#operation/getLocation
        single: function(locationId) {
            let url = `locations/${locationId}`;
            return client.request({ url: url }, { method: 'GET' })
        },
        // DeleteLocation
        // https://api.reputation.com/v3/docs#operation/deleteLocation
        delete: function(locationId, query){
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = `locations/${locationId}${qs}`;
            return client.request({ url: url }, { method: 'DELETE'})
        },
        // OptOutOfAudit
        // https://api.reputation.com/v3/docs#operation/optOutOfAudit
        optOutOfAudit: function(locationId, query){
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = `locations/${locationId}/opt-out${qs}`;
            return client.request({ url: url }, { method: 'PUT'})
        },
        // OptOutOfAudit
        // https://api.reputation.com/v3/docs#operation/optOutOfAudit
        optInToAudit: function(locationId, query){
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = `locations/${locationId}/opt-in${qs}`;
            return client.request({ url: url }, { method: 'PUT'})
        },
        // AddPage
        // https://api.reputation.com/v3/docs#operation/addPage
        addPage: function(locationId, page){
            let url = `locations/${locationId}/addPage`;
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(page) })
        },
        // GetAttributeDefinitions
        // https://api.reputation.com/v3/docs#operation/getAttributeDefinitions
        attributeDefinitions: function (query) {
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = "locations-attribute-definitions" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // GetDuplicateLocations
        // https://api.reputation.com/v3/docs#operation/getDuplicateLocations
        duplicateLocations: function (query) {
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = "locations-duplicate" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
    }
}