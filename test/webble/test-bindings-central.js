
var should = require('should');
var sinon = require('sinon');
var bindings = require('../../lib/mac/bindings');
var Mock = require('./webbluetooth-mock');

var a = require('../abstract/common');

var Abstract = require('../abstract/test-bindings-abstract');


Abstract.startScanningEmitScanStart(bindings, Mock, function(mock, sandbox){

});

Abstract.stopScanningEmitScanStop(bindings, Mock, function(mock, sandbox){

});

Abstract.emitStateChange(bindings, Mock, function(mock, sandbox){

});

Abstract.emitDiscover(bindings, Mock, function(mock, sandbox){

  sandbox.stub(mock.mockBluetooth, "requestDevice", function(request){
    return mock.nativeDevice;
  });

});

Abstract.emitConnectSuccess(bindings, Mock, function(mock){

});

Abstract.emitConnectFail(bindings, Mock, function(mock){

});

Abstract.emitDisconnect(bindings, Mock, function(mock, sandbox){

  // sandbox.stub(mock.nativePeripheralObject, "cancelConnection", function(){
  //   mock.mockCentral
  //   .emit('peripheralDisconnect', mock.nativePeripheralObject);
  // });

  //set internal state
  // mock.discoverPeripheral();
  // mock.discoverServices();
  // mock.discoverCharacteristics();
  // mock.discoverDescriptors();

});

