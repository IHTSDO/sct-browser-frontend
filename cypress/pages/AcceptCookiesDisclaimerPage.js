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

// -- Select Danish Edition
getDanishEdition(){
  return cy.get('#local_editions > :nth-child(6)').should('contain', 'Danish Edition')
}

// -- Select Estonian Edition
getEstonianEdition(){
  return cy.get('#local_editions > :nth-child(7)').should('contain', 'Estonian Edition')
}

// -- Select Finnish Edition
getFinnishEdition(){
  return cy.get('#local_editions > :nth-child(8)').should('contain', 'Finnish Edition')
}

// -- Select German Edition
getGermanEdition(){
  return cy.get('#local_editions > :nth-child(9)').should('contain', 'Germany Edition')
}

// -- Select Netherlands Edition
getNetherlandsEdition() {
  return cy.get('#local_editions > :nth-child(11)').should('contain', 'Netherlands Edition')
}

// -- Select Swiss Edition
getSwissEdition(){
  return cy.get('#local_editions > :nth-child(15)').should('contain', 'Swiss Edition')
}

// -- Select Uruguay Edition
getUruguayEdition() {
  return cy.get('#local_editions > :nth-child(17)').should('contain', 'Uruguay Edition')
}

// -- Select Norwegian Edition
getNorwegianEdition() {
  return cy.get('#local_editions > :nth-child(13)').should('contain', 'Norwegian Edition')
}

// -- Select US Edition
getUSEdition() {
  return cy.get('#local_editions > :nth-child(16)').should('contain', 'United States Edition')
}

// -- Select SE Edition
getSwedishEdition() {
  return cy.get('#local_editions > :nth-child(14)').should('contain', 'Swedish Edition')
}

// -- Select NZ Edition
getNewZealandEdition() {
  return cy.get('#local_editions > :nth-child(12)').should('contain', 'New Zealand Edition')
}

}

module.exports = AcceptCookiesDisclaimerPage
