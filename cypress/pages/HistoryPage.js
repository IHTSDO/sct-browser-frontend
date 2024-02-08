class HistoryPage {

//Navigate to History page
getHistoryTab() {
    cy.get('#history-tab-link-fh-cd1_canvas > .i18n').click()
    if(cy.get('.col-md-9 > h4 > .i18n').contains('History'))
    {
      return cy.log('History page is displayed')   
    } 
}

getSwitchtoDetailsPage(){
    cy.get(':nth-child(1) > [style="width:12.5%;"] > .history-item').contains('2019-07-31').click()
    if(cy.get(':nth-child(1) > tbody > .fsn-row > :nth-child(1)').should('contain', 'Heart structure (body structure)'))
    {
      return cy.log('Successfully redirected to Details page from History page')     
    }
}

}

module.exports = HistoryPage