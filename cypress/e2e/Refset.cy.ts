import {it} from "mocha"

import {StartPage} from "../pages/StartPage"
import {RefsetPage} from "../pages/RefsetPage"

const startPage = new StartPage()
const refsetPage = new RefsetPage()

describe("Refset", () => {

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
