'use strict';

var yaml = require('js-yaml'),
    fs = require('fs');

// load configuration from parameters file
var config = yaml.safeLoad(fs.readFileSync(__dirname + '/parameters.yml', 'utf8'));

module.exports = config.parameters;

