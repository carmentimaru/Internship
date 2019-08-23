Feature: Log into the Timesheet application

  Background:
    Given the user opens the login page

  Scenario Outline: Log in using valid credentials
    Given the user inputs valid <username> and <password>
    Then check if the user is successfully logged into his home page as <user>
    Then save screen shot of logged in user in <path>
    And log out

    Examples:
      | username      | password | user          | path                                                 |
      | radu.pop      | test     | Pop Radu      | ./reports/screenshots/loginWithValidCredentials1.png |
      | razvan.vuscan | test     | Vuscan Razvan | ./reports/screenshots/loginWithValidCredentials2.png |


  Scenario Outline: Log in using invalid credentials
    Given the user is trying to login using <uname> and <pass>
    Then look for <errm> displayed, log <msg> and save screenshot in <sspath>
    And check if the user is still on login page

    Examples:
      | uname         | pass           | errm                          | msg                                 | sspath                         |
      | !@#FGDgg550   | test           | User not found.               | invalid username                    | invalidUsernameTest            |
      | razvan.vuscan | d hsf!@#$% sgs | Invalid username or password. | invalid password and valid username | invalidUsernameAndPasswordTest |
      | blank         | blank          | User name not provided.       | blank credentials                   | blankUserAndPasswordTest       |
      | blank         | test           | User name not provided.       | blank username                      | blankUserTest                  |