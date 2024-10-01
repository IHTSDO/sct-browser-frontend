import {it} from "mocha"

import {StartPage} from "../pages/StartPage"
import {SearchPage} from "../pages/SearchPage"
import {DetailsTab} from "../pages/DetailsTab"

const startPage = new StartPage()
const searchPage = new SearchPage()
const detailsTab = new DetailsTab()

describe("C605827-Search_and_Load", () => {

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

    it("Search 'heart' and verify the search result", () => {
        searchPage.search('heart');
        searchPage.validateSearchResult();
    })

    it("Scroll down", () => {
        cy.get('#fh-tabs-pane').scrollTo(0, 500)
    })

    it("Filter records by Body Structure semantic tag", () => {
        searchPage.setSemanticTagFilter('body structure');
        searchPage.validateSearchResult();
    })

    it("Check 'Group by concept' checkbox", () => {
        searchPage.checkGroupByConcept();
        searchPage.validateSearchResult();
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

    /*it("Navigate to Details tab by clicking the first history item in the history tab", () => {
        historyTab.selectFirstHistoryItem();
    })*/

})
