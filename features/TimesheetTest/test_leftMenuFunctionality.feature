Feature: Functionality of menu buttons

   Background:
      Given the user is on the login page
      Then the user is succesfully logging into Timesheet app

   Scenario Outline: Checking the functionality of the menu options
      Given the user is logged in and the left menu is visible
      Then the user clicks on vertical drop-down lists
      Then the user clicks on every <option> of the menu

      Examples:
         | option                                                                                                                            |
         | Dashboard-Timesheet-Time Tracking-Absences-Contacts-Profile-My Curriculum Vitae-Skills-Preset Events-My Credit Points-My Surveys- |