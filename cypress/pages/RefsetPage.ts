export default class RefsetPage {
    selectRefsetTab() {
        cy.get('a[href="#fh-refset_canvas"]').click();
        cy.get('#fh-refset_canvas').should('have.class', 'active');
    }

    loadFirstRefset() {
        cy.get('#fh-refset_canvas-datatable a.refset-item').first().as('refset').click();

        cy.get('@refset').invoke('attr', 'data-concept-id').then(conceptId => {
            cy.get('#home-attributes-fh-cd1_canvas')
                .within(() => {
                    cy.get('a[data-concept-id="' + conceptId + '"]').should('exist').and('be.visible');
                })
        })
    }

    loadFirstMemberConcept() {
        cy.get('#fh-refset_canvas-resultsTable .member-concept-row').first().as('member').click();

        cy.get('@member').find('.badge').invoke('attr', 'data-concept-id').then(conceptId => {
            cy.get('#home-attributes-fh-cd1_canvas')
                .within(() => {
                    cy.get('a[data-concept-id="' + conceptId + '"]').should('exist').and('be.visible');
                })
        })
    }

    sortRefsetByActiveMembersCount() {
        cy.get('#fh-refset_canvas-datatable .sorting[data-i18n-id="i18n_active_members_count"]').as('activeMembersCount').click();

        cy.get('@activeMembersCount').should('have.class', 'sorting_asc');
        cy.get('#fh-refset_canvas-datatable .sorting_1').each(($el, index, $list) => {
            if (index > 0) {
                expect(parseInt($el.text())).to.gte(parseInt($list[index - 1].textContent));
            }
        })
    }
}
