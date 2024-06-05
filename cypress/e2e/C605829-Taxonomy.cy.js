import { it } from "mocha"
import AcceptCookiesDisclaimerPage from "../pages/AcceptCookiesDisclaimerPage"
import TaxonomyPage from "../pages/TaxonomyPage"

const accept = new AcceptCookiesDisclaimerPage()
const taxonomy = new TaxonomyPage()

describe("C605829-Taxonomy", () => {
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

// Select Taxonomy tab
it("select Taxonomy tab", () => {
    taxonomy.getTaxonomyTab()
})

// Click on  Able to thrive (finding)
it("select Able to thrive (finding)", () => {
    taxonomy.getAbletoThrive()
})

// Click on Abnormal blood oxygen pressure (finding)
it("select Abnormal blood oxygen pressure (finding)", () => {
    taxonomy.getAbnormalBloodFinding()
})

// Expand Abnoraml blood clinical finding
it("expand Abnormal blood clinical finding", () => {
    taxonomy.getExpandClinicalFinding()
})

// Switch to stated view
it("switch to stated view", () => {
    taxonomy.getStatedView()
})

// Verify Abnormal blood oxygen pressure now has no children after switch to stated view
it("verify Abnormal blood oxygen pressure now has no children after switch to stated view", () => {
    taxonomy.getAbormalBloodOxygenNoChild()
})

// Turn descendants count on
it("Turn descendants count on", () => {
    taxonomy.getTurnDescendantsCountOn()
})

// Verify descendants count is displayed
it("descendants count value", () => {
    taxonomy.getTurnDescendantsCountValue()
})

// Change the language to 'PT in US'
it("change the language to PT in US", () => {
    taxonomy.getChangeLanguage()
})

// Verify brackets are removed from the concept name in PT in US language
it("brackets are removed from the concept name in PT in US language", () => {
    taxonomy.getLanguageResult()
})

// Reset the taxonomy
it("reset the taxonomy", () => {
    taxonomy.getResetTaxonomy()
})

})