$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('subjectiveWeek2Q5\fb.feature');
formatter.feature({
  "line": 1,
  "name": "LoginFunction",
  "description": "",
  "id": "loginfunction",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login button exists",
  "description": "",
  "id": "loginfunction;login-button-exists",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open Facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Login button should exists",
  "keyword": "Then "
});
formatter.match({
  "location": "FBLoginClass.goToFacebook()"
});
formatter.result({
  "duration": 2673798600,
  "status": "passed"
});
formatter.match({
  "location": "FBLoginClass.loginButton()"
});
formatter.result({
  "duration": 88100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "loginfunction;login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login2"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I open Facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enters username1 and password1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Message displayed incorrect",
  "keyword": "Then "
});
formatter.match({
  "location": "FBLoginClass.goToFacebook()"
});
formatter.result({
  "duration": 2847954400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username1",
      "offset": 12
    },
    {
      "val": "password1",
      "offset": 26
    }
  ],
  "location": "FBLoginClass.user_enters_UserName_and_Password(String,String)"
});
formatter.result({
  "duration": 2219813200,
  "status": "passed"
});
formatter.match({
  "location": "FBLoginClass.measage_displayed_login_unsuccessful()"
});
formatter.result({
  "duration": 60200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "loginfunction;login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login2"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I open Facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enters username2 and password2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Message displayed incorrect",
  "keyword": "Then "
});
formatter.match({
  "location": "FBLoginClass.goToFacebook()"
});
formatter.result({
  "duration": 2886495400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username2",
      "offset": 12
    },
    {
      "val": "password2",
      "offset": 26
    }
  ],
  "location": "FBLoginClass.user_enters_UserName_and_Password(String,String)"
});
formatter.result({
  "duration": 2230844500,
  "status": "passed"
});
formatter.match({
  "location": "FBLoginClass.measage_displayed_login_unsuccessful()"
});
formatter.result({
  "duration": 53400,
  "status": "passed"
});
});