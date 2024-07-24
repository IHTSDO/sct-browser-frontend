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
        cy.get('#international_editions').find('a[codesystem-shortname="SNOMEDCT"]').click()
    }

}
