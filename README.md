## Usage

### Standard Usage
The following implementation applies for:
* Authorize
* Categories
* Credentials
* FAQs
* ListingAudits
* Metrics
* Reports
* Requests
* Reviews
* Summary
* Surveys
* Surveys2Results
* Surveys3Results
* Tenants
* Tickets
* Users
```js
var RDC = require('reputation-dot-com-sdk');

var rdc = new RDC({
    ApiKey: 'api-key',
    TenantId: 12345
});
```

## Methods
### Authorize
```js
authorize.authorize(user)
```

### Categories
```js
categories.list(query)
```

### Credentials
```js
credentials.list(query)
credentials.save(credential)
credentials.single(credentialId)
credentials.oauthStatus(query)
credentials.passwordStatus(query)
```

### FAQs
```js
faqs.list(query)
faqs.single(faqId)
```

### ListingAudits
```js
listingAudits.list(query)
```

### Locations
```js
locations.list(query)
locations.save(location, query)
locations.getSearch(query)
locations.postSearch(locationSearch)
locations.searchFaceted(query)
locations.single(locationId)
locations.delete(locationId, query)
locations.optOutOfAudit(locationId, query)
locations.optInToAudit(locationId, query)
locations.addPage(locationId, page)
locations.attributeDefinitions(query)
locations.duplicateLocations(query)
```

### Metrics
```js
metrics.pageMetrics(query)
metrics.postMetrics(query)
metrics.aggregatePageMetrics(query)
metrics.aggregatePostMetrics(query)
```

### Reports
```js
reports.run(reportId, report)
```

### Requests
```js
requests.metrics(query)
requests.requestUrls(query)
requests.sendEmail(request)
requests.sendEmail(request)
requests.unsubscribeEmail(request)
requests.unsubscribePhone(request)
requests.unsubscribes(query)
```

### Reviews
```js
reviews.list(query)
reviews.responses(reviewId)
reviews.respond(reviewId, response)
```

### Summary
```js
summary.list(query)
```

### Surveys
```js
surveys.list(query)
surveys.save(surveyResult)
surveys.single(surveyId, query)
```

### Surveys2Results
```js
surveys2Results.getResult(query)
surveys2Results.save(surveyResult)
surveys2Results.createUrlFromEncrypted(body, query)
```

### Surveys3Results
```js
surveys3Results.single(surveyId, query)
surveys3Results.save(survey)
```

### Tenants
```js
tenants.list(query)
tenants.save(tenant)
tenants.single(tenantId)
tenants.pause(tenantId)
tenants.unpause(tenantId)
```

### Tickets
```js
tickets.list(query)
tickets.save(ticket)
tickets.queues()
tickets.stages()
tickets.ticketDefinitions()
```

### Users
```js
users.list(query)
users.save(user)
users.single(userId)
```