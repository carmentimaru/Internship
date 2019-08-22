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
    languageButton: () => '.text',
    languageOption: (option) => {
      if(option === 'romanian'){
        return '.item[role=option]:nth-child(1)';
      }
      else return '.item[role=option]:nth-child(2)';
    } 

  },
  loggedInPageElements: {
    loggedInUserName: () => 'div._3s35j',
    logoutButton: () => '.right.menu a:nth-child(4)',
  }
}
module.exports = csslib