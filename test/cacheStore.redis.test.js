const RedisCache = require('../lib/cache.redis');
const redisMock = require('redis-mock');
const contract = require('./cacheStore.contract.test');

describe('redis (using redis-mock) backed cache', () => {
  contract(() => new RedisCache(redisMock.createClient()));
});
