class SummaryPage {

//Swap the view to Inferred
getSwapView(){
    cy.get('#home-fh-cd1_canvas-stated-button > .i18n').then(($btn) => {
        if($btn.hasClass('btn btn-primary'))
        {
          //switch to Inferred view
          return cy.get('#home-fh-cd1_canvas-inferred-button').click()
        }
        else 
        {
          return cy.log('Details page is already displayed in Inferred view')
        }
    })
}

}

module.exports = SummaryPage