import {it} from "mocha";
import editions = require('../fixtures/editions.json');

const urlBrowser = Cypress.env('URL_BROWSER');

beforeEach(() => {
    cy.clearCookies();
})

editions.forEach((edition) => {

    describe(edition.editionName, () => {

        it(`Launch browser at ${urlBrowser}`, () => {
            cy.visit(urlBrowser);
        })

        it(`Accept cookies`, () => {
            cy.get('#iubenda-cs-banner').find('.iubenda-cs-accept-btn').click();
        })

        it(`Accept license agreement`, () => {
            cy.get('#license-modal').find('#accept-license-button-modal').click();
        })

        it(`Select edition '${edition.editionName}'`, () => {
            const editionsSelector = edition.internationalEdition ? '#international_editions' : '#local_editions';
            cy.get(editionsSelector).find('a[editioncode="' + edition.editionCode + '"]').should('contain', edition.editionName).click();
        })

        it(`Check selected language is '${edition.languageFlag}'`, () => {
            cy.get('#nav-selected-flag .phoca-flag').should('have.class', edition.languageFlag);
        })

        it(`Search '${edition.searchTerm}' and verify the result`, () => {
            cy.get('#fh-search_canvas-searchBox').type(edition.searchTerm);
            cy.get('#fh-search_canvas-resultsTable .resultRow').should('have.length.at.least', 1)
        })

        it(`Scroll down`, () => {
            cy.get('#fh-tabs-pane').scrollTo(0, 500);
        })

        it(`Set module filter '${edition.moduleName}`, () => {
            cy.get('.module-link[data-module="' + edition.moduleId + '"]').click();
            cy.get('#fh-search_canvas-moduleResumed').should('have.attr', 'data-name', edition.moduleName)
        })

        it(`Assert that the first result has '${edition.editionCode}' flag in the first column`, () => {
            cy.get('#fh-search_canvas-resultsTable .resultRow').first().find('.phoca-flag').should('have.class', edition.editionCode);
        })

        it(`Select module concept '${edition.moduleId} | ${edition.moduleName}'`, () => {
            cy.get('#fh-search_canvas-resultsTable').find('.resultRow a[data-concept-id="' + edition.moduleId + '"]').click();
        })

        it(`Assert that '${edition.editionCode}' flag is displayed in the Summary tab`, () => {
            cy.get('#home-attributes-fh-cd1_canvas')
                .within(() => {
                    cy.get('a[data-concept-id="' + edition.moduleId + '"]').should('exist').and('be.visible');
                    cy.get('.phoca-flag').should('have.class', edition.editionCode)
                })
        })

        it(`Select Details tab`, () => {
            cy.get('a[href="#details-fh-cd1_canvas"]').click();
        })

        it(`Assert that '${edition.editionCode}' flag is displayed in the Details tab`, () => {
            cy.get('#fh-cd1_canvas-attributes-panel')
                .within(() => {
                    cy.get('a[data-concept-id="' + edition.moduleId + '"]').should('exist').and('be.visible');
                    cy.get('.phoca-flag').should('have.class', edition.editionCode);
                })
        })
    })

})
