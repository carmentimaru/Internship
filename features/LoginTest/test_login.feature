Feature: Log into the Timesheet application

   Background: 
   Given the user opens the login page

   Scenario Outline: Log in using valid credentials
   Given the user inputs valid <username> and <password>
   Then check if user is successfully logged into his home page as <user>
   Then save screen shot of logged in user in <path>
   And log out

   Examples:
    | username | password | user | path |
    |    radu.pop |   test |  Pop Radu   | ./reports/screenshots/loginWithValidCredentials1.png |
    |    razvan.vuscan |   test |  Vuscan Razvan | ./reports/screenshots/loginWithValidCredentials2.png |

   
   Scenario Outline: Log in using invalid credentials
   Given the user is trying to login using <uname> and <pass>
   Then look for <errm> displayed, log <msg> and save screenshot in <sspath>
   And check if the user is still on login page

   Examples:
    | uname | pass | errm | msg | sspath |
    |    !@#FGDgg550 |   test | User not found. | invalid username | invalidUsernameTest |
    |    razvan.vuscan |   dhsf!@#$% sgs | Invalid username or password. | invalid password and valid username | invalidUsernameAndPasswordTest |
    | | | User name not provided. | blank credentials | blankUserAndPasswordTest |
    | | test | User name not provided. | blank username | blankUserTest |

   Scenario Outline: Changing interface language
   Given the page is displayed in <engl>
   Then the user is selecting Romanian langauage option
   Then check if the page is now displayed in <ro>
   And switch back to English

   Examples:
   | engl | ro | |
   | Username Password Login Language | Utilizator Parola Autentificare Limba | |