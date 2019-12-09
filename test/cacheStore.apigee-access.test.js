const ApigeeAccessCache = require('../lib/cache.apigee-access');
const contract = require('./cacheStore.contract.test');

describe('apigee access backed cache', () => {
  contract(() => new ApigeeAccessCache());
});
