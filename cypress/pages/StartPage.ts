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
        cy.get('#international_editions').find('a[codesystem-shortname="SNOMEDCT"]').click()
    }

    selectEditionByEditionCode(editionCode: string, internationalEdition: boolean) {
        const editionsSelector = internationalEdition ? '#international_editions' : '#local_editions';
        cy.get(editionsSelector).find('a[editioncode="' + editionCode + '"]').click();
    }

}
