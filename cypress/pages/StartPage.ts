const urlBrowser = Cypress.env('URL_BROWSER');

export class StartPage {

    visit() {
        cy.visit(urlBrowser);
    }

    acceptCookies() {
        cy.get('#iubenda-cs-banner').find('.iubenda-cs-accept-btn').click();
    }

    acceptLicenseAgreement() {
        cy.get('#license-modal').find('#accept-license-button-modal').click();
    }

    selectInternationalEdition() {
        // International Edition button does not have 'editioncode' value or any other distinct characteristic
        // among 3 existing at the moment international editions, so we have to rely on the order number for now
        cy.get('#international_editions').find('a').first().should('contain.text', 'International Edition').click()
    }

}
