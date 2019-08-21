
const csslib = {
  loginUrl : () => 'http://192.168.88.76.xip.io:8091/#/login',
  loggedInUrl : () => 'http://192.168.88.76.xip.io:8091/#/',
  screenshotPath : () => './reports/screenshots/',
  body : () => 'body',
  loginPageElements : {
    usernameField: () => 'input[type=text]',
    passwordField: () => 'input[type=password]',
    loginButton: () => 'button[type=submit]',
    errorNonscript: () => 'noscript',
    errorBox: () => '._2s8_B',
    languageGeneralOption: () => '.item[role=option]:',
    languageButton: () => '.text'

  },
  loggedInPageElements: {
    loggedInUserName: () => 'div._3s35j',
    logoutButton: () => '.right.menu a:nth-child(4)',


  }

  
}
module.exports = csslib