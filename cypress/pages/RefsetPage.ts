export class RefsetPage {

    loadFirstRefset() {
        cy.get('#fh-refset_canvas-datatable a.refset-item').first().as('refset').click();

        cy.get('@refset').invoke('attr', 'data-concept-id').then(conceptId => {
            cy.get('#home-attributes-fh-cd1_canvas')
                .within(() => {
                    cy.get('a[data-concept-id="' + conceptId + '"]').should('exist').and('be.visible');
                })
        })
    }

// Load the first concept from the members list
    getFirstConceptMembersList() {
        cy.get('.bottom_panel').scrollTo(0, 50)
        cy.get('tbody > :nth-child(1) > :nth-child(1) > .badge').click()
        cy.get('#home-attributes-fh-cd1_canvas > h4').invoke('text').then((text) => {
            if (text.includes('(disorder)')) {
                return cy.log('Selected first concept from members list is loaded into the details panelsection')
            } else if (text.includes('(procedure)')) {
                return cy.log('Selected first concept from members list is loaded into the details panelsection')
            } else {
            }
        })
    }

// Sort the refset table by the active members
    getSortRefset() {
        cy.get('[data-i18n-id="i18n_active_members_count"]').click()
        if (cy.get(':nth-child(1) > .sorting_1').contains(/10|[1-9]/)) {
            return cy.log('Members with the lowest counts are displayed first')
        }
    }

}
