class RefsetPage {
    
//Navigate to Refset page
getRefsetTab(){
    cy.get('#refsets-tab-link-fh-cd1_canvas > .i18n').click()
    if(cy.get('#refsets-fh-cd1_canvas > :nth-child(2) > thead > tr > th > .i18n').should('have.text', 'Simple Refsets Memberships'))
    {
      return cy.log('Refset page is displayed')  
    }
}

}

module.exports = RefsetPage