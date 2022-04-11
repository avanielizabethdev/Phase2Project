Feature: This feature would be used to test the product price of the application https://www.saucedemo.com/

  Background: Login to the application
    Given I have launced the application

  Scenario Outline: Validate the price of the product
    When I have logged the application successful
    Then validate the below "<Product>" and its "<Price>"

    Examples: 
      | Product                  | Price  |
      | Sauce Labs Backpack      | $29.99 |
      | Sauce Labs Bike Light    | $9.99  |
      | Sauce Labs Bolt T-Shirt  | $15.99 |
      | Sauce Labs Fleece Jacket | $49.99 |
