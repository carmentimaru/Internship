const { client } = require('nightwatch-cucumber')
const { Given, Then, When, And } = require('cucumber')
const cssLib = require('../selectors/csslib.js')

Given(/^the user opens the login page$/, () =>{
  return client
    .url(cssLib.loginUrl())
    .waitForElementVisible(cssLib.body(), 2000, false)

})

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
    .url(cssLib.loginUrl())
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


Given(/^the user is trying to login using ([^"]*) and ([^"]*)$/, async (uname, pass) => {
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
    .url(cssLib.loginUrl())
    .assert.containsText(cssLib.loginPageElements.errorBox(), errormsg , 'Trying to login with '+ msg)
    .saveScreenshot(cssLib.screenshotPath()+sspath+'.png')
    .pause(5000);
  }
})
Then(/^check if the user is still on login page$/, async () => {
  return await client.assert.urlEquals(cssLib.loginUrl());
})

var checkLanguage = (lang, msg) => {
  var wordsArray = lang.split(" ");
  return  client
  .getAttribute(cssLib.loginPageElements.usernameField(), 'placeholder', function(result){
    return client.assert.equal(result.value, wordsArray[0],'Testing if page language is ' + msg)
    
  })
  .getAttribute(cssLib.loginPageElements.passwordField(), 'placeholder', function(result){
     client.assert.equal(result.value, wordsArray[1],'Testing if page language is ' + msg)
  })
  .assert.containsText(cssLib.loginPageElements.loginButton(), wordsArray[2],'Testing if page language is ' + msg)
  .assert.containsText(cssLib.loginPageElements.languageButton(), wordsArray[3],'Testing if page language is ' + msg)
}

var changeLanguage = (lang) => {
  let path;
  if(lang === 'romanian'){
    path = 'nth-child(1)'
  }
  else{
    path = 'nth-child(2)'
  }
  return client
  .click('.text')
  .pause(2000)
  .click(cssLib.loginPageElements.languageGeneralOption() + path)
  .pause(2000);
}

Given(/^the page is displayed in ([^"]*)$/, async (words) => {
  await checkLanguage(words, 'English');
  return client;
})

Then(/^the user is selecting Romanian langauage option$/, async () =>{
   await changeLanguage('romanian');
   return client.saveScreenshot(cssLib.screenshotPath() + 'languageChangedToRomanian.png');
})


Then(/^check if the page is now displayed in ([^"]*)$/, async (rowords) =>{
  await checkLanguage(rowords, 'Romanian');
  return client;
})

Then(/^switch back to English$/, async () =>{
  await changeLanguage('english');
  return client.saveScreenshot(cssLib.screenshotPath() + 'languageChangedToEnglish.png');
})