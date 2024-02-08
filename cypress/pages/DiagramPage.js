class DiagramPage {

//Navigate to Diagram page
getDiagramTab() {
    cy.get('#diagram-tab-link-fh-cd1_canvas > .i18n').click()
    if(cy.get('#diagram-canvas-fh-cd1_canvas-download-button').should('be.visible'))
    {
      return cy.log('Diagram page is displayed')  
    }
  }

}

module.exports = DiagramPage