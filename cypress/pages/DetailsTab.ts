export default class DetailsTab {
    openDescriptionDetailsView() {
        cy.get('.popover').should('not.exist');
        cy.get('#fh-cd1_canvas-descriptions-panel .fsn-row').first().find('button.more-fields-button').click();
        cy.get('.popover').should('exist').and('be.visible');
    }

    closeDescriptionDetailsView(){
        cy.get('.popover').should('exist').and('be.visible');
        cy.get('#fh-cd1_canvas-descriptions-panel .fsn-row').first().find('button.more-fields-button').click();
        cy.get('.popover').should('not.exist');
    }
}
