class ReferencesPage {

//Navigate to References page
getReferencesTab(){
    cy.get('#references-tab-link-fh-cd1_canvas > .i18n').click()
    if(cy.get('#references-2 > .panel-body > .table > thead > tr > :nth-child(1) > .i18n').should('have.text', 'Term'))
    {
      return cy.log('References page is displayed')  
    }
}

}

module.exports = ReferencesPage