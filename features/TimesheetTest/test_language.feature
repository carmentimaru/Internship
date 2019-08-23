Feature: Change the language of Login Page

  Scenario Outline: Changing interface language
    Given the user is on login page
    Then the page is displayed in <engl>
    Then the user is selecting Romanian langauage option
    Then check if the page is now displayed in <ro>
    And switch back to English

    Examples:
      | engl                             | ro                                    |
      | Username Password Login Language | Utilizator Parola Autentificare Limba |