Feature: registration

Scenario: registration process
    Given The user enters the registration page
    When He fills required fields in the registration form and creates account
    Then Account has been successfully created