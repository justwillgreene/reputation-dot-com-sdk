const fetch = require("isomorphic-unfetch");
class RDC {
    constructor(config){
        this.baseURL = "reputation.com" || config.baseURL;
        this.ApiKey = null || config.ApiKey;
        this.TenantId = null || config.TenantId;
        this.Authorization = null || config.Authorization;
        var self = this;
        const categories = [
            "authorize",
            "categories",
            "credentials",
            "faqs",
            "listingAudits",
            "locations",
            "metrics",
            "reports",
            "requests",
            "reviews",
            "summary",
            "surveys",
            "surveys2Results",
            "surveys3Results",
            "tenants",
            "tickets",
            "users"
        ];
        categories.forEach(function (category) {
            self[category] = require(__dirname + "/categories/" + category + ".js")(self);
        });
    }
    request(requestDetails, options) {
        requestDetails.subd = requestDetails.subd || "api.";
        requestDetails.ext = requestDetails.ext || "/v3";
        requestDetails.url = requestDetails.url || "";
        requestDetails.method = requestDetails.method || "GET";
        let url = "https://" + requestDetails.subd + this.baseURL + requestDetails.ext + "/" + requestDetails.url;
        let headers = {
            'X-API-KEY': this.ApiKey,
            'Content-Type': 'application/json'
        };
        if (this.TenantId) {
            headers['X-TENANT-ID'] = this.TenantId;
        }
        if (this.Authorization) {
            headers.Authorization = this.Authorization
        }
        let config = {
            ...options,
            headers: headers
        }
        return fetch(url, config)
        .then(r => {
            if (r.ok) {
                return r.json();
            }
            console.log(r)
            throw new Error(r);
        });
    }
}
module.exports = RDC;