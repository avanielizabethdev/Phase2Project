$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/Login.feature");
formatter.feature({
  "name": "Login Feature Scenarios",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify Login Functionality with correct username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enters the username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enters the password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be landed on the product page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launced the application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_launced_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Login Functionality with correct username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enters the username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enters_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enters the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enters_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the product page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_landed_on_the_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Login with incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enters the username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enters the password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get the \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce1",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launced the application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_launced_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Login with incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enters the username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enters_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enters the password \"secret_sauce1\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enters_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_get_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});