export default class {
  constructor() {
    this._prevValue = null;
    this._prevTime = null;
  }

  update(value, time = new Date()) {
    var vpms = this.calculate(value, time, this._prevValue, this._prevTime);

    this._prevValue = value;
    this._prevTime = time;

    return vpms;
  },

  calculate(newValue, newTime, prevValue, prevTime) {
    var valueDiff = newValue - prevValue,
      timeDiff = newTime.getTime() - prevTime.getTime();

    return valueDiff / timeDiff;
  }
};