import Environment from "./environment";

describe("Environment", () => {

  test("should have a VERSION property", () => {
    expect(Environment.VERSION).toBeDefined();
  });

  test("should have a userAgent property", () => {
    expect(Environment.userAgent).toBeDefined();
  });

  test("should have a browser.version property", () => {
    expect(Environment.browser.version).toBeDefined();
  });

  test("should have a browser.vers.major property", () => {
    expect(Environment.browser.vers.major).toBeDefined();
  });

  test("should have a browser property", () => {
    expect(Environment.browser).toBeDefined();
  });

  test("should have a mobile property", () => {
    expect(Environment.mobile).toBeDefined();
  });

  test("should have a tablet property", () => {
    expect(Environment.tablet).toBeDefined();
  });

  test("should have a geolocation property", () => {
    expect(Environment.geolocation).toBeDefined();
  });

  test("should have a orientation property", () => {
    expect(Environment.orientation).toBeDefined();
  });

  test("should have a haptic property", () => {
    expect(Environment.haptic).toBeDefined();
  });

  test("should have a vibrate property", () => {
    expect(Environment.vibrate).toBeDefined();
  });

  test("should have a ambientLight property", () => {
    expect(Environment.ambientLight).toBeDefined();
  });

  test("should have a ambientLightSensor property", () => {
    expect(Environment.ambientLightSensor).toBeDefined();
  });

  test("should have a ambientLightSensorEnabled property", () => {
    expect(Environment.ambientLightSensorEnabled).toBeDefined();
  });

  test("should have a ambientLightSensorSupported property", () => {
    expect(Environment.ambientLightSensorSupported).toBeDefined();
  });

  test("should have a ambientLightSensorAvailable property", () => {
    expect(Environment.ambientLightSensorAvailable).toBeDefined();
  });

  test("should have a ambientLightSensorEnabled property", () => {
    expect(Environment.ambientLightSensorEnabled).toBeDefined();
  });

  test("should have a ambientLightSensorSupported property", () => {
    expect(Environment.ambientLightSensorSupported).toBeDefined();
  });

});
