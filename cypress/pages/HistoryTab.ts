export class HistoryTab {

    getSwitchtoDetailsPage() {
        cy.get(':nth-child(1) > [style="width:12.5%;"] > .history-item').contains('2019-07-31').click()
        /*if (cy.get(':nth-child(1) > tbody > .fsn-row > :nth-child(1)').should('contain', 'Heart structure (body structure)')) {
            return cy.log('Successfully redirected to Details page from History page')
        }*/
    }

    selectFirstHistoryItem() {
        /*cy.intercept('https://dev-browser.ihtsdotools.org/snowstorm/snomed-ct/browser/MAIN/2019-07-31/concepts/80891009?descendantCountForm=inferred').as('getHistoricalVersion');

        cy.get('#details-fh-cd1_canvas').should('not.have.class', 'active');

        cy.get('a[data-branch="MAIN/2019-07-31"]').trigger('mouseover').click({force: true});

        cy.wait('@getHistoricalVersion');*/

        cy.get('#history-list- tr:first-of-type td:first-of-type a.history-item:first-of-type').click()
        cy.get('#details-fh-cd1_canvas').should('have.class', 'active');
    }

}
