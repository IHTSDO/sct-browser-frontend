import {it} from "mocha"

import {StartPage} from "../pages/StartPage"
import {SearchPage} from "../pages/SearchPage"
import {DetailsTab} from "../pages/DetailsTab"
import {HistoryTab} from "../pages/HistoryTab"

const startPage = new StartPage();
const searchPage = new SearchPage();
const detailsTab = new DetailsTab();
const historyTab = new HistoryTab();

describe("C605827-Search and Load", () => {

    let searchCount1 = 0;
    let searchCount2 = 0;
    let searchCount3 = 0;

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

    it("Open the version selector dropdown list", () => {
        searchPage.openVersionSelectorDropdown();
    })

    it(`Select '2023-12-01' from the version dropdown list`, () => {
        searchPage.selectVersion('2023-12-01');
    })

    it("Uncheck 'Group by Concept' checkbox", () => {
        searchPage.uncheckGroupByConcept()
    })

    it("Search for 'heart' and verify the search result", () => {
        searchPage.search('heart');
        searchPage.validateSearchResult('80891009');
        cy.get('#fh-search_canvas-searchBar > span').then(($el) => {
            searchCount1 = parseInt($el.contents().eq(0).text().trim());
        })
    })

    it("Scroll down", () => {
        cy.get('#fh-tabs-pane').scrollTo(0, 500)
    })

    it("Filter records by Body Structure semantic tag", () => {
        searchPage.setSemanticTagFilter('body structure');
        searchPage.validateSearchResult(null);
        cy.get('#fh-search_canvas-searchBar > span').should(($el) => {
            searchCount2 = parseInt($el.contents().eq(0).text().trim());
            expect(searchCount2).to.lt(searchCount1);
        })
    })

    it("Check 'Group by concept' checkbox", () => {
        searchPage.checkGroupByConcept();
        searchPage.validateSearchResult(null);
        cy.get('#fh-search_canvas-searchBar > span').should(($el) => {
            searchCount3 = parseInt($el.contents().eq(0).text().trim());
            expect(searchCount3).to.lt(searchCount2);
        })
    })

    it("Scroll up", () => {
        cy.get('#fh-tabs-pane').scrollTo('top')
    })

    it("Load concept '80891009 | Heart structure (body structure)'", () => {
        searchPage.loadConcept('80891009');
    })

    it("Select Stated view", () => {
        searchPage.selectView('stated')
    })

    it("Select Inferred view", () => {
        searchPage.selectView('inferred')
    })

    it("Navigate to Details tab", () => {
        searchPage.selectTab('details');
    })

    it("Open description details view for FSN", () => {
        detailsTab.openDescriptionDetailsView();
    })

    it("Close description details view for FSN", () => {
        detailsTab.closeDescriptionDetailsView();
    })

    it("Navigate to Diagram tab", () => {
        searchPage.selectTab('diagram');
    })

    it("Navigate to Expression tab", () => {
        searchPage.selectTab('expression');
    })

    it("Navigate to Refsets tab", () => {
        searchPage.selectTab('refsets');
    })

    it("Navigate to References tab", () => {
        searchPage.selectTab('references');
    })

    it("Navigate to History tab", () => {
        searchPage.selectTab('history');
    })

    it("Navigate to Details tab by clicking the first history item in the history tab", () => {
        historyTab.selectFirstHistoryItem();
    })

})
