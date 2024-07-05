import { it } from "mocha"
import AcceptCookiesDisclaimerPage from "../pages/AcceptCookiesDisclaimerPage"
import SNOMEDCTBrowserPage from "../pages/SNOMEDCTBrowserPage"
import DetailsPage from "../pages/DetailsPage"

const accept = new AcceptCookiesDisclaimerPage()
const searchpage = new SNOMEDCTBrowserPage()
const detailspage = new DetailsPage()

describe("C605845-New Zealand Edition", () => {
it("Launch browser url", () => {
    accept.visit()
})
          
// Click on Accept cookies  
it("Click on Accept cookies", () => {
    accept.getCookiesAccept().click()
})
        
// Click on Accept disclaimers 
it("Click on Accept disclaimers", () => {
   accept.getDisclaimersAccept().click()
})

// Select -New Zealand Edition
it("Select New Zealand Edition", () => {
   accept.getNewZealandEdition().click()
})

// Search module and ensure that search records and record count is displayed
it("Search module and verify the search result", () => {
   searchpage.getSearch().type('module')
   cy.fixture('SNOMEDCTSearch').then((data) => {
   searchpage.getValidateSearchResult(data.NewZealandEditionSearchResult)
   })
})

// Scroll the page
it("Scroll page", () => {
   cy.get('#fh-tabs-pane').scrollTo(0,500)
})

// Select -New Zealand Extension module filter
it("Select New Zealand Extension module filter", () => {
    searchpage.getNewZealandModuleFilter()
})

// Assert that the first result has a flag in the first column in the search results
it("Assert that the first result has a flag in the first column in the search results", () => {
    searchpage.getResultHaveFlags()
})

// Load the first result
it("Load the first result", () => {
    searchpage.getConcept().click()
    if(cy.get('#home-attributes-fh-cd1_canvas > h4').should('contain', 'New Zealand maintained module (core metadata concept)'))
    {
        cy.log('Selected concept loads into summary panel')
    }
})

// Click the details tab
it("Click the details tab", () => {
    cy.fixture('DetailsTab').then((data) => {
    detailspage.getDetailsTab(data.NewZealandEditionConceptDetailsTab)
    })
})

})
