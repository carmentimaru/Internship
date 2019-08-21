const seleniumServer = require('selenium-server')
const chromedriver = require('chromedriver')
const geckodriver = require('geckodriver')

require('nightwatch-cucumber')({
  cucumberArgs: ['--require', 'features/step_definitions', '--format', 'json:reports/cucumber.json', 'features']
})

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  live_output: false,
  disable_colors: false,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path,
      'webdriver.gecko.driver': geckodriver.path
    }
  },
  test_settings: {
    
    chrome: {
      launch_url: 'http://192.168.88.76.xip.io:8091/#/login',
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
      },
      firefox: {
        launch_url: 'http://192.168.88.76.xip.io:8091/#/login',
        desiredCapabilities: {
          browserName: 'firefox',
          javascriptEnabled: true,
          acceptSslCerts: true
        }
      },
      firefox_headless: {
        desiredCapabilities: {
          browserName: 'firefox',
          javascriptEnabled: true,
          acceptSslCerts: true,
          'moz:firefoxOptions': {
            args: ['--headless']
          }
        }
      },
      chrome_headless: {
        desiredCapabilities: {
          browserName: 'chrome',
          javascriptEnabled: true,
          acceptSslCerts: true,
          chromeOptions: {
            args: ['headless']
          }
        }
      }
    }
  }
