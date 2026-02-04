import StartPage from "../pages/StartPage";
import SearchPage from "../pages/SearchPage";
import MembersTab from "../pages/MembersTab";

const startPage = new StartPage();
const searchPage = new SearchPage();
const membersTab = new MembersTab();

const urlBrowser = Cypress.env('URL_BROWSER');

describe("Reference Set Members", () => {

    before(() => {
        cy.clearAllCookies();
    })

    it(`Launch browser at ${urlBrowser}`, () => {
        startPage.visit(urlBrowser);
    })

    it(`Accept cookies`, () => {
        startPage.acceptCookies();
    })

    it(`Accept license agreement`, () => {
        startPage.acceptLicenseAgreement();
    })

    it(`Select International Derivatives Edition`, () => {
        startPage.selectInternationalDerivativesEdition();
    })

    it("Search for '721144007' and verify the search result", () => {
        searchPage.search('721144007');
        searchPage.validateSearchResult('721144007');
    })

    it("Load concept '721144007 |General dentistry diagnostic reference set|'", () => {
        searchPage.loadConcept('721144007');
    })

    it("Navigate to Members tab", () => {
        searchPage.selectTab('members');
    })

    it("Verify that members are shown", () => {
        membersTab.verifyMembersAreShown();
    })

})
