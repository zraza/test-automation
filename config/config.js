const chai = require('chai'),
  chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

exports.config = {

  directConnect: true,

  baseUrl: (process.env.TEST_BASE_URL || 'https://github.com'),
  apiBaseUrl: (process.env.TEST_API_BASE_URL || 'https://api.github.com'),

  capabilities: {
    'browserName': (process.env.TEST_BROWSER_NAME || 'chrome'),
    'version': (process.env.TEST_BROWSER_VERSION || 'ANY')
  },

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    '../BDD/features/*.feature'
  ],

  resultJsonOutputFile: './reports/json/protractor_report.json',

  onPrepare: function() {

    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    global.expect = chai.expect;
  },
  cucumberOpts: {

    strict: true,
    format: ['pretty'],
    require: ['../BDD/step-definitions/*.js', '../BDD/features/*.js', '../BDD/support/*.js']

  }
};
