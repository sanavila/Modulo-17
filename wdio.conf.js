export const config = {
   
  //  runner: 'local',
  //  port: 4723,
    
        user: 'sanavila',
        key: 'fd833928-57dd-4ea5-bed0-a26b7a03b540',
        hostname: 'ondemand.us-west-1.saucelabs.com',
        port: 443,
        baseUrl: 'wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
    ],
    maxInstances: 10,
        
    capabilities: [
/*        {
        platformName: 'Android',
        'appium:deviceName': 'ebac-mobile2',
        'appium:platformVersion': '9.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        'appium:appWaitActivity': '.MainActivity',
        'appim:disableIdLocatorAutocompletion': true
    }
*/

{
    platformName: 'Android',
    'appium:app': 'storage:filename=ebacshop.aab', 
    'appium:deviceName': 'Samsung.*',
    'appium:platformVersion': '10',
    'appium:automationName': 'UiAutomator2',
    'appim:disableIdLocatorAutocompletion': true,
    'sauce:options': {
       build: 'appium-build-tarefa-modulo17',
       name: 'tarefa módulo 17',
       deviceOrientation: 'PORTRAIT',
       appiumVersion: '2.0.0',
     },
   }],


    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
