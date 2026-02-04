import StartPage from "../pages/StartPage";
import RefsetPage from "../pages/RefsetPage";

const startPage = new StartPage();
const refsetPage = new RefsetPage();

const urlBrowser = Cypress.env('URL_BROWSER');

describe("Refset", () => {

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

    it(`Select International Edition`, () => {
        startPage.selectInternationalEdition();
    })

    it("Select Refset tab", () => {
        refsetPage.selectRefsetTab();
    })

    it("Load the first refset", () => {
        refsetPage.loadFirstRefset()
    })

    it("Load the first concept from the members list", () => {
        refsetPage.loadFirstMemberConcept()
    })

    it("Sort the refset table by the active members", () => {
        refsetPage.sortRefsetByActiveMembersCount()
    })

})
