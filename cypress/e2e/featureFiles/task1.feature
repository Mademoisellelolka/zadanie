Feature: login

Scenario: correct login 
    Given The user enters the login page
    When He enters the correct login details and clicks the login button
    Then The user is successfully logged in