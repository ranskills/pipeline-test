Feature: Login

    In order to use the application
    As a user
    I want to be able to log in

    Scenario: Valid credentials
        Given a user is on the login page
        And enters the username "admin" and password "pass"
        And presses the login button
        Then the login should succeed and user shown the starting page
