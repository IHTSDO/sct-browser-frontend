class DetailsPage {

//Swap the view to Inferred
getDetailsTab(value){
    cy.get('#details-tabs-fh-cd1_canvas > :nth-child(2) > a > .i18n').click()
    if(cy.get(':nth-child(1) > thead > :nth-child(1) > .text-center').should('have.text', value))
    {
      return cy.log('Details page is displayed')
    }
}

//Click on the first description information icon
getClickDescriptionDetails(){
    cy.get(':nth-child(1) > tbody > .fsn-row > :nth-child(2) > .btn > .glyphicon').click()
    if(cy.get('.popover-content').should('be.visible'))
    {
      return cy.log('Popover opens displaying more information about the description')
    }
}

// Unclick on the first description information icon
getUnclickDescriptionDetails(){
    cy.get(':nth-child(1) > tbody > .fsn-row > :nth-child(2) > .btn > .glyphicon').click()
    if(cy.get('.popover-content').should('not.exist'))
    {
      return cy.log('Description information is not displayed')
    }
}

}

module.exports = DetailsPage