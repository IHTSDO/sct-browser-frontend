const username = Cypress.env('TEST_LOGIN_USR');
const password = Cypress.env('TEST_LOGIN_PSW');

export default class Utils {
    loginTimeoutInSeconds = 30_000;

    login(): void {
        cy.contains('Welcome to SNOMED International', {timeout: 15000});
        cy.get('#username').clear();
        cy.get('#username').type(username);
        cy.get('#password').clear();
        cy.get('#password').type(password, {log: false});
        cy.get('input#kc-login', {timeout: this.loginTimeoutInSeconds}).click({force: true});
    }
}
