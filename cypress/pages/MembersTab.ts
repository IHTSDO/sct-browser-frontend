export class MembersTab {
    verifyMembersAreShown() {
        cy.get('#members-fh-cd1_canvas-resultsTable').should('exist').and('be.visible')
            .within(() => {
                cy.get('thead > tr').children('th').should('have.length', 3);
                cy.get('tbody').children('tr').should('have.length.at.least', 1);
            });
    }
}
