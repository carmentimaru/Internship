const { client } = require('nightwatch-cucumber')
const { Given, Then, When, And } = require('cucumber')
const cssLib = require('../selectors/csslib.js')

//Step Definitions
//Background
Given(/^the user opens the login page$/, () =>{
  return client
    .init()
    .waitForElementVisible(cssLib.body(), 2000, false)

})

//Login with valid credentials
Given(/^the user inputs valid ([^"]*) and ([^"]*)$/, (uname, pass) => {
  if(client.expect.element(cssLib.loginPageElements.usernameField()).to.be.visible && client.expect.element(cssLib.loginPageElements.passwordField()).to.be.visible){
    client
      .setValue(cssLib.loginPageElements.usernameField(), uname)
      .setValue(cssLib.loginPageElements.passwordField(), pass);
    if(client.expect.element(cssLib.loginPageElements.loginButton()).to.be.visible){
      return client
        .click(cssLib.loginPageElements.loginButton())
    }
  }
})

Then(/^check if user is successfully logged into his home page as ([^"]*)$/, (text) =>{
 client.waitForElementVisible(cssLib.body(), 2000, false);
 return client
    .init()
    .pause(2000)
    .assert.containsText(cssLib.loggedInPageElements.loggedInUserName(), text, 'Testing if the user is logged into his personal account.');
})

Then(/^save screen shot of logged in user in ([^"]*)$/, async(path)=>{
  return await client
  .pause(1000)
  .saveScreenshot(path);
})

Then(/^log out$/, async() => {
  if(client.expect.element(cssLib.loggedInPageElements.logoutButton()).to.be.visible){
    return await client
      .click(cssLib.loggedInPageElements.logoutButton())
      .pause(2000)
      .saveScreenshot(cssLib.screenshotPath() + 'successfulLogOut.png');
  }
})

//Login using invalid credentials
Given(/^the user is trying to login using ([^"]*) and ([^"]*)$/, async (uname, pass) => {
  uname = checkIfBlank(uname);
  console.log(uname);
  pass = checkIfBlank(pass);
  if(client.expect.element(cssLib.loginPageElements.usernameField()).to.be.visible && client.expect.element(cssLib.loginPageElements.passwordField()).to.be.visible){
    client
      .setValue(cssLib.loginPageElements.usernameField(), uname)
      .setValue(cssLib.loginPageElements.passwordField(), pass);
    if(client.expect.element(cssLib.loginPageElements.loginButton()).to.be.visible){
      return await client
        .click(cssLib.loginPageElements.loginButton())
    }
  }
})

Then(/^look for ([^"]*) displayed, log ([^"]*) and save screenshot in ([^"]*)$/, async (errormsg, msg, sspath) =>{
  if (client.expect.element(cssLib.loginPageElements.errorNonscript()).to.be.enabled){
    return await client
    .waitForElementVisible(cssLib.loginPageElements.errorBox(),2000, false)
    .init()
    .assert.containsText(cssLib.loginPageElements.errorBox(), errormsg , 'Trying to login with '+ msg)
    .saveScreenshot(cssLib.screenshotPath()+sspath+'.png')
    .pause(5000);
  }
})
Then(/^check if the user is still on login page$/, () => {
  return client.assert.urlEquals(cssLib.loginUrl());
})

//Functions
 const checkIfBlank = (input) => {
   if(input === 'blank'){
     return "";
   }
   else return input;
 }