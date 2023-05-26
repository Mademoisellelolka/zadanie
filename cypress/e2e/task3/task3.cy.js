import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { registerForm as reg } from "../../utils/locators";
import { first } from "cypress/types/lodash";

const registerCredentials = {
    'test@test.test': 'email',
    'test': 'password',
}

Given('User opens given page', () => {
    cy.visit('http://localhost:3000/new-page')
});

When('User goes to the new page', () => {
    cy.get(reg.email).type(registerCredentials.email);
    cy.get(reg.password).type(registerCredentials.password);
    cy.get(reg.hobby).click(first);
    cy.get(reg.photo).selectFile('file.txt');
    cy.get(reg.conditionFirst).click();
    cy.get(reg.conditionThird).click();
    cy.get(reg.saveButton).click();
});

When('User chooses given student data', () => {

});

Then('Students data is shown', () => {
    cy.url().should('contain', 'http://localhost:3000/success-registration');
    cy.get('body').should('contain', 'Account created for:');
});