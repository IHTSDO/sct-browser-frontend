import StartPage from "../pages/StartPage";
import SearchPage from "../pages/SearchPage";

const startPage = new StartPage();
const searchPage = new SearchPage();

describe("Comparing Perspective", () => {
    let conceptId: string;

    before(() => {
        cy.clearCookies();
    })

    it(`Launch browser at ${startPage.urlBrowser}`, () => {
        startPage.visit();
    })

    it(`Accept cookies`, () => {
        startPage.acceptCookies();
    })

    it(`Accept license agreement`, () => {
        startPage.acceptLicenseAgreement();
    })

    it(`Select International Edition`, () => {
        startPage.selectInternationalEdition();
    })

    it(`Search for 'heart' and validate the result`, () => {
        searchPage.search('heart');
        searchPage.validateSearchResult(null);
    })

    it(`Load the first concept`, () => {
        searchPage.loadConceptByIndex(0);
        cy.get('#fh-search_canvas-resultsTable').find('.resultRow').eq(0).find('.result-item a').then(($el) => {
            // Save the concept id
            conceptId = $el.attr('data-concept-id');
        })
    })

    it(`Select perspective "Comparing"`, () => {
        cy.get('#perspective-selector').click();
        cy.get('#perspective-selector .dropdown-menu').contains('a', 'Comparing').click();
    })

    it(`Assert that the screen is split into 2 parts, both showing the same concept in the Summary tab`, () => {
        cy.get('#comparing-concepts-perspective .left_panel')
            .find('#home-attributes-cc-cd1_canvas')
            .should('be.visible')
            .within(() => {
                cy.get('a[data-concept-id="' + conceptId + '"]').should('exist').and('be.visible');
            });

        cy.get('#comparing-concepts-perspective .right_panel')
            .find('#home-attributes-cc-cd2_canvas')
            .should('be.visible')
            .within(() => {
                cy.get('a[data-concept-id="' + conceptId + '"]').should('exist').and('be.visible');
            });
    })

    it(`Select perspective "Full"`, () => {
        cy.get('#perspective-selector').click();
        cy.get('#perspective-selector .dropdown-menu').contains('a', 'Full').click();
    });

    it(`Assert that the screen returns to the initial layout: the Search tab on the left, the concept loaded in the Summary tab - on the right`, () => {
        cy.get('#full-height-perspective .left_panel')
            .find('#fh-search_canvas-searchBox')
            .should('be.visible');
        cy.get('#full-height-perspective .right_panel')
            .find('#home-attributes-fh-cd1_canvas')
            .should('be.visible')
            .within(() => {
                cy.get('a[data-concept-id="' + conceptId + '"]').should('exist').and('be.visible');
            })
    })

})
