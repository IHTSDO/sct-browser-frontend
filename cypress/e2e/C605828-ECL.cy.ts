import {it} from "mocha"

import {StartPage} from "../pages/StartPage"
import {ECLPage} from "../pages/ECLPage"

const startPage = new StartPage()
const ecl = new ECLPage()

describe("C605828-ECL", () => {

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

    //Select Expression Constraint Queries tab on the right
    it("navigate to ECL query page", () => {
        ecl.getExpressionConstraintTab()
    })

    //Click on ECL Builder button
    it("click on ECL builder button", () => {
        ecl.getEclBuilderButton()
    })

    //Search for '80891009' and select the match
    it("search concept 80891009", () => {
        cy.fixture('ECLQuery').then((data) => {
            ecl.getSearchConcept(data.conceptnumber)
        })
    })

    //Click on Ok button
    it("click on OK button", () => {
        ecl.getOkButton()
    })

    it("Get the right pane", () => {
        cy.get('#fh-tabs-pane2');//.scrollTo('top')
    })

    //Click on Execute button
    it("click on Execute button", () => {
        ecl.getECLQuery()
        ecl.getExecuteButton()
    })

    //Verify the query execution result
    it("check query execution and result", () => {
        ecl.getResult()
    })

    //Click on ECL Builder button
    it("click on ECL builder button", () => {
        ecl.getEclBuilderButton()
    })

    //Click on Add Refinement button
    it("click on Add Refinement button", () => {
        ecl.getAddRefinementButton()
    })

    //Populate refinement with Laterality (attribute) and Side (qualifier value)
    it("populate attribute and qualifier values", () => {
        cy.fixture('ECLQuery').then((data) => {
            ecl.getPopulateRefinementValues(data.attribute, data.qualifier)
        })
    })

    //Click on Ok button
    it("click on OK button", () => {
        ecl.getOkButton()
    })

    it("Get the right pane", () => {
        cy.get('#fh-tabs-pane2');//.scrollTo('top')
    })

    //Click on Execute button
    it("click on Execute button", () => {
        ecl.getECLQuery()
        ecl.getExecuteButton()
    })

    //Verify the query execution result
    it("check query execution and result", () => {
        ecl.getResult()
    })

})
