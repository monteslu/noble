
var should = require('should');
var sinon = require('sinon');
var bindings = require('../../lib/mac/bindings');
var Mock = require('./webbluetooth-mock');

var a = require('../abstract/common');
var Abstract = require('../abstract/test-bindings-abstract');


//we need to stub/emit something for these
Abstract.emitRead(bindings, Mock, function(mock, sandbox)
{


});

Abstract.emitWrite(bindings, Mock);

Abstract.emitNotify(bindings, Mock, function(mock, sandbox)
{


});

Abstract.emitDescriptorsDiscover(bindings, Mock, function(mock, sandbox)
{


});
