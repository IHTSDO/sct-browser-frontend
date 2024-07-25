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

    validateSearchResult() {
        cy.get('#fh-search_canvas-resultsTable .resultRow').should('have.length.at.least', 1)
    }

    loadConcept(conceptId: string) {
        cy.get('#fh-search_canvas-resultsTable').find('.resultRow a[data-concept-id="' + conceptId + '"]').click();
    }

    selectView(view: string) {
        cy.get('#home-fh-cd1_canvas-' + view + '-button').then(($btn) => {
            if (!$btn.hasClass('btn-primary')) {
                $btn.trigger('click');
            }
        })
    }

    selectTab(tab: string) {
        cy.get('#details-tabs-fh-cd1_canvas a[data-test="' + tab + '"]').click();
    }

}
