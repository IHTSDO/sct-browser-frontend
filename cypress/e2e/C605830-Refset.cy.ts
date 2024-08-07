import {it} from "mocha"

import {StartPage} from "../pages/StartPage"
import {RefsetPage} from "../pages/RefsetPage"

const startPage = new StartPage()
const refsetPage = new RefsetPage()

describe("C605829-Refset", () => {

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

    it("Select Refset tab", () => {
        cy.get('a[href="#fh-refset_canvas"]').click();
        cy.get('#fh-refset_canvas').should('have.class', 'active');
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
