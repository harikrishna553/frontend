import * as path from "path";

export const config: WebdriverIO.Config = {
  runner: "local",
  tsConfigPath: "./tsconfig.json",
  port: 4723,

  specs: ["./test/specs/**/*.ts"],
  exclude: [],

  maxInstances: 1,

  capabilities: [
    {
      "appium:platformName": "Android",
      "appium:platformVersion": "16.0",
      "appium:deviceName": "Pixel 8",
      "appium:automationName": "UiAutomator2",
      "appium:app": path.join(
        process.cwd(),
        "app",
        "android",
        "ApiDemos-debug.apk"
      ),
    },
  ],

  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  services: ["appium"],

  framework: "mocha",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
