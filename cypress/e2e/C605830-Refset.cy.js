import { it } from "mocha"
import AcceptCookiesDisclaimerPage from "../pages/AcceptCookiesDisclaimerPage"
import RefsetTabPage from "../pages/RefsetTabPage"

const accept = new AcceptCookiesDisclaimerPage()
const refset = new RefsetTabPage()

describe("C605829-Refset", () => {
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

// Select Refset tab
it("select refset tab", () => {
    refset.getRefsetTab()
})

// Load the first refset
it("load the first refset", () => {
    refset.getFirstRefset()
})

// Load the first concept from the members list
it("load the first concept from the members list", () => {
   refset.getFirstConceptMembersList()
})

// Sort the refset table by the active members
it("sort the refset table by the active members", () => {
    refset.getSortRefset()
})

})