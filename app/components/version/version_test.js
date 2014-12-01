'use strict';

describe('primate.version module', function() {
  beforeEach(module('primate.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
