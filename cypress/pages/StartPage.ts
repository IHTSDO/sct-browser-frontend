import Utils from '../commands/Utils';

const utils = new Utils();

export default class StartPage {

    visit(url: string) {
        cy.visit(url);
        cy.get('#signInBtn').click();
        utils.login();
    }

    acceptCookies() {
        cy.get('#iubenda-cs-banner').find('.iubenda-cs-accept-btn').click();
    }

    acceptLicenseAgreement() {
        cy.get('#license-modal').find('#accept-license-button-modal').click();
    }

    selectInternationalEdition() {
        this.selectEditionByShortName('SNOMEDCT', true);
    }

    selectInternationalDerivativesEdition() {
        this.selectEditionByShortName('SNOMEDCT-DERIVATIVES', true);
    }

    selectEditionByEditionCode(editionCode: string, internationalEdition: boolean) {
        this.selectEdition('editionCode', editionCode, internationalEdition);
    }

    selectEditionByShortName(shortName: string, internationalEdition: boolean) {
        this.selectEdition('codesystem-shortname', shortName, internationalEdition);
    }

    selectEdition(attributeName: string, attributeValue: string, internationalEdition: boolean) {
        const editionsSelector = internationalEdition ? '#international_editions' : '#local_editions';
        cy.get(editionsSelector).find('a[' + attributeName + '="' + attributeValue + '"]').click();
        cy.get('#fh-search_canvas').should('have.class', 'active');
        cy.get('#fh-cd1_canvas-pane').should('have.class', 'active');
    }

}
