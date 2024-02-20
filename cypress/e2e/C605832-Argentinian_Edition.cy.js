import { it } from "mocha"
import AcceptCookiesDisclaimerPage from "../pages/AcceptCookiesDisclaimerPage"
import SNOMEDCTBrowserPage from "../pages/SNOMEDCTBrowserPage"
import DetailsPage from "../pages/DetailsPage"

const accept = new AcceptCookiesDisclaimerPage()
const searchpage = new SNOMEDCTBrowserPage()
const detailspage = new DetailsPage()

describe("C605832-Argentinian Edition", () => {
it("Launch browser url", () => {
    accept.visit()
})
          
// Click on Accept cookies  
it("click on Accept cookies", () => {
    accept.getCookiesAccept().click()
})
        
// Click on Accept disclaimers 
it("Click on Accept disclaimers", () => {
   accept.getDisclaimersAccept().click()
})

// Select Argentinian Edition
it("Select Argentinian Edition", () => {
   accept.getArgentinianEdition().click()
})

// Uncheck the Group by concept checkbox if it is selected already
it("Uncheck GroupbyConcept checkbox", () => {
   searchpage.getUnchekGroupbyConcept()
   cy.log('Group by concept check box is uncheked')
})

// Search heart and ensure that search records and record count is displayed
it("Search heart and verify the search result", () => {
   searchpage.getSearch().type('heart')
   searchpage.getValidateSearchResult()
})

// Filter by 'Spanish'
it("Filter by Spanish", () => {
    searchpage.getSpanishlanguage()
    searchpage.getValidateSearchResult()
})

// Assert that all results have flags in the first column in the search results
it("Assert that all results have flags in the first column in the search results", () => {
    searchpage.getResultHaveFlags()
})

// Load the first result
it("Load the first result", () => {
    searchpage.getConcept().click()
    if(cy.get('#home-attributes-fh-cd1_canvas > h4').should('contain', 'virus Heartland (organismo)'))
    {
        cy.log('Selected concept loads into summary panel')
    }
})

// Click the details tab
it("Click the details tab", () => {
    cy.fixture('DetailsTab').then((data) => {
    detailspage.getDetailsTab(data.ArgentinianEditionConceptDetailsTab)
    })
})

})