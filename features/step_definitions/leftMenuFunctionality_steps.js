const { client } = require('nightwatch-cucumber')
const { Given, Then, When, And } = require('cucumber')
const cssLib = require('../selectors/csslib.js')

//Step Definitions
//Background
Given(/^the user is on the login page$/, () => {
  return client
    .init()
    .waitForElementVisible(cssLib.body(), 2000, false)
})
Then(/^the user is succesfully logging into Timesheet app$/, () => {
  return client
    .setValue(cssLib.loginPageElements.usernameField(), 'radu.pop')
    .setValue(cssLib.loginPageElements.passwordField(), 'test')
    .click(cssLib.loginPageElements.loginButton())
    .pause(2000)
})

//Scenarios
Given(/^the user is logged in and the left menu is visible$/, () => {
  return client
    .assert.urlEquals(cssLib.loggedInUrl())
    .expect.element(cssLib.loggedInPageElements.leftMenuBar()).to.be.visible
})
Then(/^the user clicks on vertical drop-down lists$/, () => {
  return client.elements('css selector', cssLib.loggedInPageElements.dropDownLists(), (result) => {
    console.log(result.value)
    result.value.forEach((value) => {
      let elementID = value.ELEMENT;
      return client.elementIdClick(elementID).pause(2000);

    });
  })
})
Then(/^the user clicks on every ([^"]*) of the menu$/, (pageTitle) => {
  index = -1;
  return client.elements('css selector', cssLib.loggedInPageElements.menuOptions(), (result) => {
    result.value.forEach((value) => {
      let elementID = value.ELEMENT;
      return client.elementIdClick(elementID, () => {
        let wordsArray = pageTitle.split("-");
        index += 1;
        return client
          .pause(2000)
          .assert.containsText(cssLib.loggedInPageElements.pageHeader(), wordsArray[index])
      }).pause(2000)
    })
  })
})