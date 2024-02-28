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

// -- Select Austrian Edition
getAustrianEdition(){
  return cy.get('#local_editions > :nth-child(3)').should('contain', 'Austrian Edition')
}

// -- Select Belgian Edition
getBelgianEdition(){
  return cy.get('#local_editions > :nth-child(4)').should('contain', 'Belgian Edition')
}

// -- Select Canadian Edition
getCanadianEdition(){
  return cy.get('#local_editions > :nth-child(5)').should('contain', 'Canadian Edition')
}

}

module.exports = AcceptCookiesDisclaimerPage