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
if(cy.get('#accept-license-button-modal > .i18n').should('have.text', 'Accept'))
{
  return cy.get('#accept-license-button-modal > .i18n').should('have.text', 'Accept')
}
else if(cy.get('#accept-license-button-modal > .i18n').should('have.text', 'Aceptar'))
{
  return cy.get('#accept-license-button-modal > .i18n').should('have.text', 'Aceptar')
}
}

// -- Select International Edition
getInternationEdition(){
  return cy.get('#international_editions > :nth-child(1)').should('contain', 'International Edition')
}

// -- Select Argentinian Edition
getArgentinianEdition(){
  return cy.get('#local_editions > :nth-child(1)').should('contain', 'Argentinian Edition')
}

}

module.exports = AcceptCookiesDisclaimerPage