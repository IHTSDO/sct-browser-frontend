export class HistoryTab {
    selectFirstHistoryItem() {
        cy.wait(3000);

        cy.get('#details-fh-cd1_canvas').should('not.have.class', 'active');

        cy.get('#history-list-').find('.history-item').first().then(($el) => {
            const version = $el.text().trim();

            $el.trigger('click');

            cy.get('#details-fh-cd1_canvas').should('have.class', 'active');
            cy.get('#branchDisplay-fh-cd1_canvas').should('contain.text', version);
        })
    }

}
