var events = require('events');
var util = require('util');

var a = require('../abstract/common');

function Mock(bindings, sandbox){
  this.sandbox = sandbox;
  this.nativePeripheralUuidString      = 'DFE12BB4-4E7F-460D-8C1D-112914E21D9E';
  this.nativeServiceUuidString         = 'A90F0252-4CA8-48BB-AE90-6BC8F541CF8C';
  this.nativeIncludedServiceUuidString = '2D0F40D7-6C81-4336-A1AA-60CBD111317E';
  this.nativeCharacteristicUuidString  = 'E365F8C8-A49D-4B30-8547-FCC791860697';
  this.nativeDescriptorUuidString      = '7DE1AEC6-D5FB-433B-A3D0-77B4E4845CA4';

  this.nativeAdvertisementObject = {  rssi: a.rssiNumber };

  this.bindings = bindings;

  this.mockBluetooth = new NativeBluetooth();
  this.bindings.init(this.mockBluetooth);

  this.nativeDevice = new NativeDevice();
  this.nativeDevice.id = this.nativePeripheralUuidString;
  this.nativeDevice.name = a.localNameString;
  this.nativeDevice.adData = this.nativeAdvertisementObject;
  this.nativeDevice.addressType =
  this.nativeDevice.paired =
  this.nativeDevice.gatt = new NativeGatt();

  this.nativePeripheralObject = new NativePeripheral();
  this.nativePeripheralObject.device = this.nativeDevice;
  this.nativePeripheralObject.cachedServices = [];
  this.nativePeripheralObject.uuid = this.nativePeripheralUuidString;

  this.nativeServiceObject = new NativeService();
  this.nativeServiceObject.uuid = this.nativeServiceUuidString;

  this.nativeCharacteristicObject = new NativeCharacteristic();
  this.nativeCharacteristicObject.uuid = this.nativeCharacteristicUuidString;
}


// Mock.prototype.discoverPeripheral = function(){
//   this.mockCentral.emit('peripheralDiscover', this.nativePeripheralObject, this.nativeAdvertisementObject, a.rssiNumber);
// };

// Mock.prototype.discoverServices = function(){
//   var self = this;
//   this.sandbox.stub(this.nativePeripheralObject, "discoverServices", function(){
//     this.emit('servicesDiscover', [self.nativeServiceObject], a.mockError);
//   });

//   this.bindings.discoverServices(a.peripheralUuidString, a.serviceUuidsArray);
// };

// Mock.prototype.discoverCharacteristics = function(){
//   var self = this;
//   this.sandbox.stub(this.nativeServiceObject, "discoverCharacteristics", function(){
//     this.emit('characteristicsDiscover', [self.nativeCharacteristicObject], a.mockError);
//   });

//   this.bindings.discoverCharacteristics(a.peripheralUuidString, a.serviceUuidString, [a.characteristicUuidString]);
// };

// Mock.prototype.discoverDescriptors = function(){
//   var self = this;
//   this.sandbox.stub(this.nativeCharacteristicObject, "discoverDescriptors", function(){
//     this.emit('descriptorsDiscover', [self.nativeDescriptorObject], a.mockError);
//   });

//   this.bindings.discoverDescriptors(a.peripheralUuidString, a.serviceUuidString, a.characteristicUuidString);
// };


function NativeBluetooth() {}
util.inherits(NativeBluetooth, events.EventEmitter);
NativeBluetooth.prototype.requestDevice = function(){
  return Promise.resolve('ok');
};

function NativeDevice() {}
util.inherits(NativeDevice, events.EventEmitter);
NativeDevice.prototype.scanForPeripherals = function(){};
NativeDevice.prototype.stopScan = function(){};

function NativeGatt() {}
util.inherits(NativeGatt, events.EventEmitter);
NativeGatt.prototype.connect = function(){};
NativeGatt.prototype.disconnect = function(){};
NativeGatt.prototype.getPrimaryService = function(){};
NativeGatt.prototype.readRSSI = function(){};

function NativePeripheral() {}
util.inherits(NativePeripheral, events.EventEmitter);

function NativeService() {}
util.inherits(NativeService, events.EventEmitter);
NativeService.prototype.getCharacteristic = function(){};
NativeService.prototype.getCharacteristics = function(){};

function NativeCharacteristic() {}
util.inherits(NativeCharacteristic, events.EventEmitter);
NativeCharacteristic.prototype.writeValue = function(){};
NativeCharacteristic.prototype.readValue = function(){};
NativeCharacteristic.prototype.startNotifications = function(){};

module.exports = Mock;
