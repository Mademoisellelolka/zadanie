import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { registerForm as reg } from "../../utils/locators";
import { first } from "cypress/types/lodash";

const registerCredentials = {
    'test@test.test': 'email',
    'test': 'password',
}

Given('The user enters the registration page', () => {
    cy.visit('http://localhost:3000/registration')
});

When('He fills required fields in the registration form and creates account', () => {
    cy.get(reg.email).type(registerCredentials.email);
    cy.get(reg.password).type(registerCredentials.password);
    cy.get(reg.hobby).click(first);
    cy.get(reg.photo).selectFile('file.txt');
    cy.get(reg.conditionFirst).click();
    cy.get(reg.conditionThird).click();
    cy.get(reg.saveButton).click();
});

Then('Account has been successfully created', () => {
    cy.url().should('contain', 'http://localhost:3000/success-registration');
    cy.get('body').should('contain', 'Account created for:');
});