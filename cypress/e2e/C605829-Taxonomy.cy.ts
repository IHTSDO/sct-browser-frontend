import {it} from "mocha"

import {StartPage} from "../pages/StartPage"
import {TaxonomyPage} from "../pages/TaxonomyPage"

const startPage = new StartPage()
const taxonomyPage = new TaxonomyPage()

describe("C605829-Taxonomy", () => {

    it(`Launch browser`, () => {
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

    it("Select Taxonomy tab", () => {
        cy.get('a[href="#fh-taxonomy_canvas"]').click();
        cy.get('#fh-taxonomy_canvas').should('have.class', 'active');
    })

    // Click on  Able to thrive (finding)
    it("select Able to thrive (finding)", () => {
        taxonomyPage.getAbletoThrive()
    })

    // Click on Abnormal blood oxygen pressure (finding)
    it("select Abnormal blood oxygen pressure (finding)", () => {
        taxonomyPage.getAbnormalBloodFinding()
    })

    // Expand Abnoraml blood clinical finding
    it("expand Abnormal blood clinical finding", () => {
        taxonomyPage.getExpandClinicalFinding()
    })

    // Switch to stated view
    it("switch to stated view", () => {
        taxonomyPage.getStatedView()
    })

    // Verify Abnormal blood oxygen pressure now has no children after switch to stated view
    it("verify Abnormal blood oxygen pressure now has no children after switch to stated view", () => {
        taxonomyPage.getAbormalBloodOxygenNoChild()
    })

    // Turn descendants count on
    it("Turn descendants count on", () => {
        taxonomyPage.getTurnDescendantsCountOn()
    })

    // Verify descendants count is displayed
    it("descendants count value", () => {
        taxonomyPage.getTurnDescendantsCountValue()
    })

    // Change the language to 'PT in US'
    it("change the language to PT in US", () => {
        taxonomyPage.getChangeLanguage()
    })

    // Verify brackets are removed from the concept name in PT in US language
    it("brackets are removed from the concept name in PT in US language", () => {
        taxonomyPage.getLanguageResult()
    })

    // Reset the taxonomy
    it("reset the taxonomy", () => {
        taxonomyPage.getResetTaxonomy()
    })

})
