class ECLPage {

// Select Expression Constraint Queries tab on the right
getExpressionConstraintTab(){
    cy.get('a[href="#fh-query_canvas"]').click()
    if(cy.get('.col-md-6 > .lead').should('have.text', 'Enter an ECL query'))
      {
         return cy.log('Expression Constraint Queries page is displayed');
      }
 }
 
// Click on ECL Builder button
getEclBuilderButton(){
    cy.get('button[id="-eclBuilderButton"]').click()
    if(cy.get('.modal-header > h3').should('have.text','ECL Builder'))
    {
      return cy.log('ECL builder page is displayed')
    }
}

// Search for '80891009' and select the match
getSearchConcept(conceptnumber){
    //Enter the concept number in searchbox
    cy.get('.ecl-builder-typeahead > .ng-untouched').type(conceptnumber)
    //Select the concept
    cy.get('ngb-highlight').click()
    if(cy.get('.output > :nth-child(1)').should('contain', '<< 80891009 |Heart structure (body structure)|'))
     {
       return cy.log('Heart Structure concept is selected')
     }
}

//Click on Ok button
getOkButton(){
    cy.get('.accept') .click()
    if(cy.get('.col-md-6 > .lead').should('have.text', 'Enter an ECL query'))
    {
      return cy.log('ECL tab page is displayed');
    }
}

//Verify ECL query is added
getECLQuery(){
    cy.get('#fh-query_canvas-ExpText').then(($ele) => {
      expect($ele.text()).to.not.be.null
      return cy.log('ECL query is added')
  }) 
}

// Click on Execute button
getExecuteButton(){
    return cy.get('#fh-query_canvas-computeInferredButton2').click()
}

// Get Result
getResult(){
  if(cy.get('#fh-query_canvas-outputBody', { timeout: 20000 }).should('be.visible'))
    {
       return cy.log('Query executed and result is displayed')
    }
}

// Click on Add Refinment button
getAddRefinementButton(){
    cy.contains('ADD REFINEMENT').click()
    if(cy.get('.green > span').should('be.visible'))
    {
       return cy.log('Add refinement is displayed')
    }
}

//Populate refinement with Laterality (attribute) and Side (qualifier value)
getPopulateRefinementValues(attribute, qualifier){
    //Enter Laterality in search textbox
    cy.get(':nth-child(3) > .expression-group > .expression-row > :nth-child(2) > .ecl-builder-typeahead > .ng-untouched').type(attribute)
    //Select the Laterality value
    cy.get('ngb-highlight').click()

    //Enter Side in search textbox
    cy.get(':nth-child(5) > .ecl-builder-typeahead > .ng-untouched').type(qualifier)
    //Select Side value
    cy.get('#ngb-typeahead-4-0 > ngb-highlight').click()

    if(cy.get('.output').should('contain', '<< 272741003 |Laterality (attribute)| = << 182353008 |Side (qualifier value)|'))
    {
      return cy.log('Refinement with Laterality (attribute) and Side (qualifier value) populated')
    }
}
}

module.exports = ECLPage