export class SearchPage {

    openVersionSelectorDropdown(){
        cy.get('#version-selector button[data-toggle="dropdown"]').click();
    }

    selectVersion(version: string){
        cy.get('#versionSwitcher a').contains(version).click();
    }

    checkGroupByConcept(){
        cy.get('#fh-search_canvas-groupConcept').as('checkbox').invoke('is', ':checked').then(checked => {
            if (!checked) {
                cy.get('@checkbox').check();
            }
        })
    }

    uncheckGroupByConcept(){
        cy.get('#fh-search_canvas-groupConcept').as('checkbox').invoke('is', ':checked').then(checked => {
            if (checked) {
                cy.get('@checkbox').uncheck();
            }
        })
    }

    setSemanticTagFilter(semanticTag: string){
        cy.get('.semtag-link[data-semtag="' + semanticTag + '"]').click();
    }

    search(searchTerm: string) {
        cy.get('#fh-search_canvas-searchBox').type(searchTerm);
    }

    validateSearchResult(conceptId: string) {
        cy.get('#fh-search_canvas-resultsTable').as('resultTable').find('.resultRow').should('have.length.at.least', 1);
        if (conceptId) {
            cy.get('@resultTable').find('.resultRow a[data-concept-id="' + conceptId + '"]').should('exist');
        }
    }

    loadConcept(conceptId: string) {
        cy.get('#fh-search_canvas-resultsTable').find('.resultRow a[data-concept-id="' + conceptId + '"]').click();
        cy.get('#home-attributes-fh-cd1_canvas')
            .within(() => {
                cy.get('a[data-concept-id="' + conceptId + '"]').should('exist').and('be.visible');
            })
    }

    selectView(view: string) {
        cy.get('#home-fh-cd1_canvas-' + view + '-button').then(($btn) => {
            if (!$btn.hasClass('btn-primary')) {
                $btn.trigger('click');
            }
        })
    }

    selectTab(tab: string) {
        cy.get('#details-tabs-fh-cd1_canvas').find('a[data-test="' + tab + '"]').then(($el) => {
            const href = $el.attr('href');
            $el.trigger('click');
            cy.get(href).should('have.class', 'active');
        })
    }

}
