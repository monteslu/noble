
var should = require('should');
var sinon = require('sinon');
var bindings = require('../../lib/mac/bindings');
var Mock = require('./webbluetooth-mock');
var a = require('../abstract/common');
var Abstract = require('../abstract/test-bindings-abstract');

Abstract.emitRssiUpdate(bindings, Mock, function(mock, sandbox)
{

});

Abstract.emitServicesDiscover(bindings, Mock, function(mock, sandbox)
{

});
