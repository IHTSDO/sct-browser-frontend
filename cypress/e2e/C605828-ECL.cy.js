import { it } from "mocha"
import AcceptCookiesDisclaimerPage from "../pages/AcceptCookiesDisclaimerPage"
import ECLPage from "../pages/ECLPage"


const accept = new AcceptCookiesDisclaimerPage()
const eclquey = new ECLPage()

describe("C605828-ECL", () => {
    it("Launch browser url", () => {
     accept.visit()
    })

// Click on Accept cookies  
it("click on Accept cookies", () => {
    accept.getCookiesAccept().click()
  })

// Click on Accept disclaimers 
it("click on Accept disclaimers", () => {
    accept.getDisclaimersAccept().click()
   })
  
// Select InternationalEdition
it("select International Edition", () => {
    accept.getInternationEdition().click()
})
  
//Select Expression Constraint Queries tab on the right
it("navigate to ECL query page", () => {
    eclquey.getExpressionConstraintTab()
})

//Click on ECL Builder button
it("click on ECL builder button", () => {
    eclquey.getEclBuilderButton()
})

//Search for '80891009' and select the match
it("search concept 80891009", () => {
    cy.fixture('ECLQuery').then((data) => {
        eclquey.getSearchConcept(data.conceptnumber)
    })
})

//Click on Ok button
it("click on OK button", () => {
    eclquey.getOkButton()
})

//Click on Execute button
it("click on Execute button", () => {
    eclquey.getECLQuery()
    eclquey.getExecuteButton()
})

//Verify the query execution result
it("check query execution and result", () => {
    eclquey.getResult()
})

//Click on ECL Builder button
it("click on ECL builder button", () => {
    eclquey.getEclBuilderButton()
})

//Click on Add Refinement button
it("click on Add Refinement button", () => {
    eclquey.getAddRefinementButton()
})

//Populate refinement with Laterality (attribute) and Side (qualifier value)
it("populate attribute and qualifier values", () => {
    cy.fixture('ECLQuery').then((data) => {
       eclquey.getPopulateRefinementValues(data.attribute, data.qualifier)
    })
})

//Click on Ok button
it("click on OK button", () => {
    eclquey.getOkButton()
})

//Scroll the page
it("Scroll page", () => {
    cy.get('#fh-tabs-pane2').scrollTo('top')
  })

//Click on Execute button
it("click on Execute button", () => {
    eclquey.getECLQuery()
    eclquey.getExecuteButton()
})

//Verify the query execution result
it("check query execution and result", () => {
    eclquey.getResult()
})

})