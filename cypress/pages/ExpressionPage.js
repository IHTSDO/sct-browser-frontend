class ExpressionPage {

//Navigate to Expression page
getExpressionTab() {
    cy.get('#expression-tab-link-fh-cd1_canvas > .i18n').click()
    if(cy.get('#expression-canvas-fh-cd1_canvas > :nth-child(1)').contains('Pre-coordinated Expression'))
    {
      return cy.log('Expression page is displayed')  
    }
  }
  
}

module.exports = ExpressionPage