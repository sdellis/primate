'use strict';

angular.module('primate.version', [
  'primate.version.interpolate-filter',
  'primate.version.version-directive'
])

.value('version', '0.1');
