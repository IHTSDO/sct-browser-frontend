class AcceptCookiesDisclaimerPage {  
  visit() {
    cy.visit("/")
  }

   // -- Accept cookies
  getCookiesAccept(){
        return cy.get('.iubenda-cs-accept-btn').should('have.text', 'Accept')
  }
  
  // -- Accept disclaimers
  getDisclaimersAccept(){
    return cy.get('#accept-license-button-modal > .i18n').should('have.text', 'Accept')
 }

 // -- Select International Edition
 getInternationEdition(){
  return cy.get('#international_editions > :nth-child(1)').should('contain', 'International Edition')
 }

}

module.exports = AcceptCookiesDisclaimerPage