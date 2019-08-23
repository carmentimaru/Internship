const csslib = {
  loginUrl: () => 'http://192.168.88.76.xip.io:8091/#/login',
  loggedInUrl: () => 'http://192.168.88.76.xip.io:8091/#/',
  screenshotPath: () => './reports/screenshots/',
  body: () => 'body',
  loginPageElements: {
    usernameField: () => 'input[type=text]',
    passwordField: () => 'input[type=password]',
    loginButton: () => 'button[type=submit]',
    errorNonscript: () => 'noscript',
    errorBox: () => '._2s8_B',
    languageButton: () => '.text',
    languageOption: (option) => {
      if (option === 'romanian') {
        return '.item[role=option]:nth-child(1)';
      }
      else return '.item[role=option]:nth-child(2)';
    }

  },
  loggedInPageElements: {
    loggedInUserName: () => '.menu div:first-child div:nth-child(2)',
    logoutButton: () => '.right.menu a:nth-child(4)',
    leftMenuBar: () => '.menu:first-child',
    dropDownLists: () => '.ui.vertical',
    menuOptions: () => '.RE9mw',
    pageHeader: () => '.ui.header'
  }
}
module.exports = csslib