const apigee = require('apigee-access');

class ApigeeAccessCache {
  save(key, value) {
    getCache().put(key, JSON.stringify(value));
  }

  retrieve(key) {
    return new Promise((resolve) => {
      getCache().get(key, (err, data) => resolve(JSON.parse(data)));
    });
  }
}

function getCache() {
  return apigee.getCache('my-cool-cache');
}

module.exports = ApigeeAccessCache;
