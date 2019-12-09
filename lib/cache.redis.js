class RedisCache {
  constructor(redisClient) {
    this.redisClient = redisClient;
  }

  save(key, value) {
    this.redisClient.set(key, JSON.stringify(value));
  }

  retrieve(key) {
    return new Promise((resolve) => {
      this.redisClient.get(key, (err, data) => resolve(JSON.parse(data)));
    });
  }
}

module.exports = RedisCache;
