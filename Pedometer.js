const RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');
var {
  MDPedometer
} = require('NativeModules');

var listener;

const Pedometer = {
  isStepCountingAvailable(callback) {
    MDPedometer.isStepCountingAvailable(callback);
  },
  isDistanceAvailable(callback) {
    MDPedometer.isDistanceAvailable(callback);
    callback(null, true);
  },
  isFloorCountingAvailable(callback) {
    MDPedometer.isFloorCountingAvailable(callback);
  },

  isPaceAvailable(callback) {
    MDPedometer.isPaceAvailable(callback);
  },

  isCadenceAvailable(callback) {
    MDPedometer.isCadenceAvailable(callback);
  },

  startPedometerUpdatesFromDate(date, handler) {
    MDPedometer.startPedometerUpdatesFromDate(date);
    listener = RCTDeviceEventEmitter.addListener(
      'pedometerDataDidUpdate',
      handler
    );
  },
  stopPedometerUpdates() {
    MDPedometer.stopPedometerUpdates();
    listener = null;
  },

  queryPedometerDataBetweenDates(startDate, endDate, handler) {
    MDPedometer.queryPedometerDataBetweenDates(startDate, endDate, handler);
  },
};

module.exports = Pedometer;
