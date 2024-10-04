export class StartPage {

    urlBrowser = Cypress.env('URL_BROWSER');

    visit() {
        cy.visit(this.urlBrowser);
    }

    acceptCookies() {
        cy.get('#iubenda-cs-banner').find('.iubenda-cs-accept-btn').click();
    }

    acceptLicenseAgreement() {
        cy.get('#license-modal').find('#accept-license-button-modal').click();
    }

    selectInternationalEdition() {
        this.selectEdition('codesystem-shortname', 'SNOMEDCT', true);
    }

    selectInternationalDerivativesEdition() {
        this.selectEdition('codesystem-shortname', 'SNOMEDCT-DERIVATIVES', true);
    }

    selectEdition(attributeName: string, attributeValue: string, internationalEdition: boolean) {
        const editionsSelector = internationalEdition ? '#international_editions' : '#local_editions';
        cy.get(editionsSelector).find('a[' + attributeName + '="' + attributeValue + '"]').click();
        cy.get('#fh-search_canvas').should('have.class', 'active');
        cy.get('#fh-cd1_canvas-pane').should('have.class', 'active');
    }

}
