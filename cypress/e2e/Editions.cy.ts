import editions = require('../fixtures/editions.json');
import StartPage from "../pages/StartPage";
import SearchPage from "../pages/SearchPage";

const startPage = new StartPage();
const searchPage = new SearchPage();

beforeEach(() => {
    cy.clearCookies();
})

editions.forEach((edition) => {

    describe(edition.editionName, () => {

        it(`Launch browser at ${startPage.urlBrowser}`, () => {
            startPage.visit();
        })

        it(`Accept cookies`, () => {
            startPage.acceptCookies();
        })

        it(`Accept license agreement`, () => {
            startPage.acceptLicenseAgreement();
        })

        it(`Select edition '${edition.editionName}'`, () => {
            startPage.selectEditionByEditionCode(edition.editionCode, edition.internationalEdition);
        })

        it(`Check selected language is '${edition.languageFlag}'`, () => {
            cy.get('#nav-selected-flag .phoca-flag').should('have.class', edition.languageFlag);
        })

        it(`Search '${edition.searchTerm}' and verify the result`, () => {
            searchPage.search(edition.searchTerm);
            searchPage.validateSearchResult(null);
        })

        it(`Set module filter '${edition.moduleName}`, () => {
            searchPage.setModuleFilter(edition.moduleId, edition.moduleName);
        })

        it(`Assert that the first result has '${edition.editionCode}' flag in the first column`, () => {
            cy.get('#fh-search_canvas-resultsTable .resultRow').first().find('.phoca-flag').should('have.class', edition.editionCode);
        })

        it(`Select module concept '${edition.moduleId} | ${edition.moduleName}'`, () => {
            searchPage.loadConcept(edition.moduleId);
        })

        it(`Assert that '${edition.editionCode}' flag is displayed in the Summary tab`, () => {
            cy.get('#home-attributes-fh-cd1_canvas')
                .within(() => {
                    cy.get('a[data-concept-id="' + edition.moduleId + '"]').should('exist').and('be.visible');
                    cy.get('.phoca-flag').should('have.class', edition.editionCode)
                })
        })

        it(`Select Details tab`, () => {
            searchPage.selectTab('details');
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
