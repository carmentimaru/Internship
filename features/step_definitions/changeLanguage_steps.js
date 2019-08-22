const { client } = require('nightwatch-cucumber')
const { Given, Then, When, And } = require('cucumber')
const cssLib = require('../selectors/csslib.js')

//Step Definitions
Given(/^user is on login page$/, () =>{
  return client
    .init()
    .waitForElementVisible(cssLib.body(), 2000, false)

})

Then(/^the page is displayed in ([^"]*)$/, async (words) => {
  await checkLanguage(words, 'English');
})

Then(/^the user is selecting Romanian langauage option$/, async () =>{
   await changeLanguage('romanian');
   return client.saveScreenshot(cssLib.screenshotPath() + 'languageChangedToRomanian.png');
})


Then(/^check if the page is now displayed in ([^"]*)$/, async (rowords) =>{
  await checkLanguage(rowords, 'Romanian');
})

Then(/^switch back to English$/, async () =>{
  await changeLanguage('english');
  return client.saveScreenshot(cssLib.screenshotPath() + 'languageChangedToEnglish.png');
})

//Functions
const checkLanguage = (lang, msg) => {
  var wordsArray = lang.split(" ");
  return  client
  .getAttribute(cssLib.loginPageElements.usernameField(), 'placeholder', (result) => {
    return client.assert.equal(result.value, wordsArray[0],'Testing if page language is ' + msg)
    
  })
  .getAttribute(cssLib.loginPageElements.passwordField(), 'placeholder', (result) => {
     client.assert.equal(result.value, wordsArray[1],'Testing if page language is ' + msg)
  })
  .assert.containsText(cssLib.loginPageElements.loginButton(), wordsArray[2],'Testing if page language is ' + msg)
  .assert.containsText(cssLib.loginPageElements.languageButton(), wordsArray[3],'Testing if page language is ' + msg)
}

const changeLanguage = (lang) => {
  return client
  .click(cssLib.loginPageElements.languageButton())
  .pause(2000)
  .click(cssLib.loginPageElements.languageOption(lang))
  .pause(2000);
}