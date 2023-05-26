import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { login as log } from "../../utils/locators";

const loginCredentials = {
    'jan.testowy@wskz.pl': 'email',
    'aqLrvDJ348': 'password'
}

Given('The user enters the login page', () => {
    cy.visit('http://localhost:3000/')
});

When('He enters the correct login details and clicks the login button', () => {
    cy.get(log.email).type(loginCredentials.email);
    cy.get(log.password).type(loginCredentials.password);
    cy.get(log.loginButton).click();
});

Then('The user is successfully logged in', () => {
    cy.url().should('contain', 'http://localhost:3000/home');
    cy.get('body').should('contain', 'Welcome back, ');
});