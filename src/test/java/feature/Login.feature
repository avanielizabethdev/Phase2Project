@LoginFeature
Feature: Login Feature Scenarios

  Background: Open the application
    Given I have launced the application
@Sanity
  Scenario Outline: Verify Login Functionality with correct username and password
    When I enters the username "<UserName>"
    And I enters the password "<Password>"
    And I clicks on the login button
    Then I should be landed on the product page

    Examples: 
      | UserName      | Password     |
      | standard_user | secret_sauce |
@Regression
  Scenario Outline: Verify Login with incorrect username and password
    When I enters the username "<UserName>"
    And I enters the password "<Password>"
    And I clicks on the login button
    Then I should get the "<Error>"

    Examples: 
      | UserName      | Password      | Error                                                                     |
      | standard_user | secret_sauce1 | Epic sadface: Username and password do not match any user in this service |
