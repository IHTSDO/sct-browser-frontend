import { it } from "mocha"
import AcceptCookiesDisclaimerPage from "../pages/AcceptCookiesDisclaimerPage"
import SNOMEDCTBrowserPage from "../pages/SNOMEDCTBrowserPage"
import SummaryPage from "../pages/SummaryPage"
import DetailsPage from "../pages/DetailsPage"
import DiagramPage from "../pages/DiagramPage"
import ExpressionPage from "../pages/ExpressionPage"
import RefsetPage from "../pages/RefsetPage"
import ReferencesPage from "../pages/ReferencesPage"
import HistoryPage from "../pages/HistoryPage"

  const accept = new AcceptCookiesDisclaimerPage()
  const searchpage = new SNOMEDCTBrowserPage()
  const summarypage = new SummaryPage()
  const detailspage = new DetailsPage()
  const diagrampage = new DiagramPage()
  const expressionpage = new ExpressionPage()
  const refsetpage = new RefsetPage()
  const referencepage = new ReferencesPage()
  const historypage = new HistoryPage()


 describe("C605827-Search_and_Load", () => {
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

  //Select the version - 2023-12-01
  it("click on version drop down", () => {
    searchpage.getVersionSelector().click()
  })

  it("select 2023-12-01 from version drop down", () => {
    searchpage.getSelectVersion().click()
  })

  // Uncheck the Group by concept checkbox if it is selected already
  it("Uncheck GroupbyConcept checkbox", () => {
    searchpage.getUnchekGroupbyConcept()
    cy.log('Group by concept check box is uncheked')
  })

  //Search heart and ensure that search records and record count is displayed
  it("Search heart and verify the search result", () => {
    searchpage.getSearch().type('heart')
    searchpage.getValidateSearchResult()
  })

  //Scroll the page
  it("Scroll page", () => {
    cy.get('#fh-tabs-pane').scrollTo(0,500)
  })

  //Select the body structure from the left hand panel under 'filter results by semantic tag'.
  //Ensure that search records and record count is displayed
  it("Filter records by Body Structure semantic tag", () => {
    searchpage.getBodyStructureSemanticTag().click()
    searchpage.getValidateSearchResult()
  })
  
  //Select Group by concept check box
  //Ensure that search records and record count is displayed
  it("Check GroupbyConcept checkbox", () => {
    searchpage.getChekGroupbyConcept().click()
    cy.log('Group by concept check box is cheked')
    searchpage.getValidateSearchResult()
  })

  // Scroll to top and select the first concept from the search result
  it("Scroll page", () => {
    cy.get('#fh-tabs-pane').scrollTo('top')
    searchpage.getConcept().click()
  })

  //Swap the view to Inferred
  it("Swap the view to Inferred", () => {
    summarypage.getSwapView()
    cy.log('Details page is switched to Inferred view')
  })

//Navigate to Details page
it("Redirect to Details page", () => {
  cy.fixture('DetailsTab').then((data) => {
  detailspage.getDetailsTab(data.InternationalEditionConceptDetailsTab)
})
})

//Click on the first description information icon
it("View Description details", () => {
  detailspage.getClickDescriptionDetails()
})

//Unclick on the first description information icon
it("Unview Description details", () => {
  detailspage.getUnclickDescriptionDetails()
})

//Navigate to Diagram page
it("Redirect to Diagram page", () => {
  diagrampage.getDiagramTab()
})

//Navigate to Expression page
it("Redirect to Expression page", () => {
  expressionpage.getExpressionTab()
})

//Navigate to Refset page
it("Redirect to Refset page", () => {
  refsetpage.getRefsetTab()
})

//Navigate to References page
it("Redirect to References page", () => {
  referencepage.getReferencesTab()
})

//Navigate to History page
it("Redirect to History page", () => {
  historypage.getHistoryTab()
})

//Load the last changed version by clicking the first date in the version column in the history tab.
it("Redirect to Details tab by clicking the first date in the version column in the history tab.", () => {
  historypage.getSwitchtoDetailsPage()
})

})