import * as path from "path";

export const config: WebdriverIO.Config = {
  runner: "local",
  // Appium server
  hostname: "localhost",
  port: 4723,
  path: "/wd/hub", // Appium accepts "/" or "/wd/hub"
  specs: ["./tests/**/*.spec.ts"],
  maxInstances: 1,

  capabilities: [
    {
      "appium:platformName": "ios",
      "appium:platformVersion": "18.6",   // must match simulator version
      "appium:deviceName": "iPhone 16 Pro", // must match simulator name
      "appium:automationName": "XCUITest",
      "appium:app": path.join(
        process.cwd(),
        "apps",
        "UIKitCatalog-iphonesimulator.app"
      )
    }
  ],

  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  services: ["appium"],

  framework: "mocha",
  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};

