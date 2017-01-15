'use strict';
var util = require('util');
var path = require('path');
var ScriptBase = require(path.join(__dirname, '../script-base.js'));


var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createServiceFiles = function createServiceFiles() {
  this.generateSourceAndTest(
    'service/provider',
    'spec/service',
    'services',
    this.options['skip-add'] || false
  );
};
