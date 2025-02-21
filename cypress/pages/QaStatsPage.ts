export class QaStatPage {   
   
   selectTabByName(tabName: string) {
      cy.get('.fixed-top a').contains(tabName).click();
      cy.wait(3000);
   }   

   selectEditionByName(editionName: string) {
      cy.get('#branchDropdown').click();
      cy.wait(1000);
      cy.get('div.dropdown-menu').first().should('exist').and('be.visible')
      cy.get('div.dropdown-menu a').contains(editionName).click();
      cy.wait(10000);
   }
}
