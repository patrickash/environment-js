export default class Environment {

  static VERSION = '2.0';
  static #userAgent = navigator.userAgent.toLowerCase();
  static #vers = (this.userAgent.match(/.+(?:rv|it|ra|ie|me|ve)[/: ]([\d.]+)/) || [])[1].split('.');
  static #na = 'not available';

  constructor () {}

  static get userAgent () {
    return this.#userAgent;
  }

  static get vers () {
    return this.#vers;
  }

  static get na () {
    return this.#na;
  }

  static get browser () {
    return {
      version: (this.userAgent.match(/.+(?:rv|it|ra|ie|me|ve)[/: ]([\d.]+)/) || [])[1],
      vers: {
        major: this.vers[0] || this.na,
        minor: this.vers[1] || this.na,
        build: this.vers[2] || this.na,
        revision: this.vers[3] || this.na
      },
      chrome: /chrome/.test(this.userAgent) && !/edge/.test(this.userAgent), // Edge UA String uses Chrome's string but ends in Edge.
      safari: /webkit/.test(this.userAgent) && !/chrome/.test(this.userAgent),
      opera: /opera/.test(this.userAgent),
      firefox: /firefox/.test(this.userAgent),
      msie: /msie/.test(this.userAgent) && !/opera/.test(this.userAgent),
      edge: /edge/.test(this.userAgent),
      mozilla: /mozilla/.test(this.userAgent) && !/(compatible|webkit)/.test(this.userAgent),
      android: /android/.test(this.userAgent),
      androidVersion: (this.userAgent.match(/android\s([0-9.]*)/) || [])[1],
      iphone: /iphone/.test(this.userAgent),
      iphoneVersion: (this.userAgent.match(/iphone os ([0-9_]*)/) || [])[1],
      ipad: /ipad/.test(this.userAgent),
      ipadVersion: (this.userAgent.match(/cpu os ([0-9_]*)/) || [])[1],
      blackberry: /blackberry/.test(this.userAgent),
      winMobile: /iemobile/.test(this.userAgent),
      winMobileVersion: (this.userAgent.match(/iemobile\/([0-9.]*)/) || [])[1],
    };
  }

  static get mobile () {
    return this.browser.android || this.browser.iphone || this.browser.blackberry || this.browser.winMobile;
  }

  static get tablet () {
    return this.browser.ipad;
  }

  static get geolocation () {
    return navigator.geolocation !== undefined;
  }

  static get orientation () {
    return window.orientation !== undefined && window.DeviceOrientationEvent !== undefined;
  }

  static get haptic () {
    return window.navigator.vibrate !== undefined;
  }

  static get vibrate () {
    return window.navigator.vibrate !== undefined;
  }

  static get ambientLight () {
    return window.DeviceLightEvent !== undefined;
  }

  static get ambientLightSensor () {
    return window.DeviceLightEvent !== undefined;
  }

  static get ambientLightSensorEnabled () {
    return window.DeviceLightEvent !== undefined;
  }

  static get ambientLightSensorSupported () {
    return window.DeviceLightEvent !== undefined;
  }

  static get ambientLightSensorAvailable () {
    return window.DeviceLightEvent !== undefined;
  }

}

export const browser = Environment.browser;
export const mobile = Environment.mobile;
export const tablet = Environment.tablet;
export const geolocation = Environment.geolocation;
export const orientation = Environment.orientation;
export const haptic = Environment.haptic;
export const vibrate = Environment.vibrate;
export const ambientLight = Environment.ambientLight;
export const ambientLightSensor = Environment.ambientLightSensor;
export const ambientLightSensorEnabled = Environment.ambientLightSensorEnabled;
export const ambientLightSensorSupported = Environment.ambientLightSensorSupported;
export const ambientLightSensorAvailable = Environment.ambientLightSensorAvailable;
