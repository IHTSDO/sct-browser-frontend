import taxonomy = require('../fixtures/taxonomy.json');
import StartPage from "../pages/StartPage";
import TaxonomyPage from "../pages/TaxonomyPage";

const startPage = new StartPage();
const taxonomyPage = new TaxonomyPage();

const urlBrowser = Cypress.env('URL_BROWSER');

describe("Taxonomy", () => {

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

    it("Select Taxonomy tab", () => {
        taxonomyPage.selectTaxonomyTab();
        taxonomyPage.verifyConceptExpanded(taxonomy.clinicalFinding, null);
    })

    it("Select 1148601009 |Able to thrive (finding)| concept", () => {
        taxonomyPage.selectConcept(taxonomy.ableToThrive);
    })

    it("Focus 123821009 |Abnormal blood oxygen pressure (finding)| concept", () => {
        taxonomyPage.setFocusConcept(taxonomy.abnormalBloodOxygenPressure);
    })

    it("Navigate up", () => {
        taxonomyPage.navigateUp(taxonomy.clinicalFinding, taxonomy.snomedCTConcept);
    })

    it("Switch to Stated view", () => {
        taxonomyPage.switchToStatedView();
    })

    it("Verify that 123821009 |Abnormal blood oxygen pressure (finding)| has no children", () => {
        taxonomyPage.verifyConceptHasNoChildren(taxonomy.abnormalBloodOxygenPressure);
    })

    it("Turn Descendants Count on", () => {
        taxonomyPage.turnDescendantsCountOn();
    })

    it("Verify that the number of descendants is displayed", () => {
        taxonomyPage.verifyDescendantsCountIsDisplayed(taxonomy.clinicalFinding);
    })

    it("Change the language to 'PT in US'", () => {
        taxonomyPage.changeLanguageToPtInUs();
    })

    it("Verify the PT is displayed", () => {
        taxonomyPage.verifyPtIsDisplayed(taxonomy.clinicalFinding);
    })

    it("Remove focus concept", () => {
        taxonomyPage.removeFocusConcept();
        taxonomyPage.verifyConceptExpanded(taxonomy.snomedCTConcept, taxonomy.clinicalFinding);
    })

    it("Reset the taxonomy", () => {
        taxonomyPage.resetTaxonomy();
        taxonomyPage.verifyConceptExpanded(taxonomy.snomedCTConcept, taxonomy.clinicalFinding);
    })
})
