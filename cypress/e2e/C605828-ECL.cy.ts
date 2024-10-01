import {it} from "mocha"
import ecl = require('../fixtures/ECLQuery.json');

import {StartPage} from "../pages/StartPage"
import {ECLPage} from "../pages/ECLPage"

const startPage = new StartPage()
const eclPage = new ECLPage()

describe("C605828-ECL", () => {

    let searchCount1 = 0;
    let searchCount2 = 0;

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

    it("Select Expression Constraint Queries tab", () => {
        eclPage.selectExpressionConstraintQueriesTab();
    })

    it("Click ECL Builder button", () => {
        eclPage.clickEclBuilderButton();
    })

    it(`Search for concept ${ecl.conceptId}`, () => {
        eclPage.populateFocusConcept(ecl.searchTerm, ecl.conceptId);
    })

    it("Click OK button", () => {
        eclPage.clickOkButton();
        cy.wait(2000);
        eclPage.checkExpressionContainsText(ecl.conceptId);
    })

    it("Click Execute button", () => {
        eclPage.clickExecuteButton();
        cy.wait(2000);
        eclPage.verifyResults();

        cy.get('#fh-query_canvas-resultInfo > span').then(($el) => {
            searchCount1 = parseInt($el.contents().eq(1).text().trim());
        });
    })

    it("Click ECL Builder button", () => {
        eclPage.clickEclBuilderButton();
        eclPage.verifyOutput(ecl.conceptId);
    })

    it("Click Add Refinement button", () => {
        eclPage.clickAddRefinementButton();
    })

    it("Populate refinement with Laterality (attribute) and Side (qualifier value)", () => {
        ecl.refinements.forEach((refinement, index) => {
            eclPage.populateRefinement(index, refinement.searchTerm, refinement.conceptId);
        })
    })

    it("Click OK button", () => {
        eclPage.clickOkButton();
        cy.wait(2000);
        ecl.refinements.forEach((refinement) => {
            eclPage.checkExpressionContainsText(refinement.conceptId);
        });
    })

    it("Click Execute button", () => {
        eclPage.clickExecuteButton();
        cy.wait(2000);
        eclPage.verifyResults();

        cy.get('#fh-query_canvas-resultInfo > span').should(($el) => {
            searchCount2 = parseInt($el.contents().eq(1).text().trim());
            expect(searchCount2).to.lt(searchCount1);
        });
    })
})
