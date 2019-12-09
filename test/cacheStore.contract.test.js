const assert = require('assert');

function contract(cacheFactory) {
  let cache;

  describe('a cache', () => {
    beforeEach(() => {
      cache = cacheFactory();
    });

    it('stores values that can be retrieved later', async () => {
      cache.save('foo', 123);

      const storedValue = await cache.retrieve('foo');

      assert.equal(storedValue, 123);
    });
  });
}

module.exports = contract;
