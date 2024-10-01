export class ECLPage {
    populateTypeaheadBox(expressionSectionIndex: number, typeaheadIndex: number, searchTerm: string, conceptId: string) {
        cy.get('ecl-builder').find('.expression-section').eq(expressionSectionIndex).within(() => {
            cy.get('.ecl-builder-typeahead > input').eq(typeaheadIndex).type(searchTerm);
            cy.get('ngb-highlight').filter(':contains("' + conceptId + '")').click();
        });
    }

    verifyOutput(conceptId: string) {
        cy.get('.output').should('contain', conceptId);
    }

    selectExpressionConstraintQueriesTab() {
        cy.get('a[href="#fh-query_canvas"]').click();
        cy.get('#fh-query_canvas').should('have.class', 'active');
    }

    clickEclBuilderButton() {
        cy.get('button[id="-eclBuilderButton"]').click();
        cy.get('ecl-builder[id="ecl-builder"]').should('exist');
    }

    populateFocusConcept(searchTerm: string, conceptId: string) {
        this.populateTypeaheadBox(0, 0, searchTerm, conceptId);
        this.verifyOutput(conceptId);
    }

    populateRefinement(index: number, searchTerm: string, conceptId: string) {
        this.populateTypeaheadBox(1, index, searchTerm, conceptId);
        this.verifyOutput(conceptId);
    }

    clickOkButton() {
        cy.get('ecl-builder button[class="accept"]').click();
    }

    checkExpressionContainsText(text: string) {
        cy.get('#fh-query_canvas-ExpText').should('contain.value', text);
    }

    clickExecuteButton() {
        cy.get('#fh-query_canvas-computeInferredButton2').click();
    }

    verifyResults() {
        cy.get('#fh-query_canvas-outputBody').children().should('have.length.at.least', 1);
    }

    clickAddRefinementButton() {
        cy.get('ecl-builder').find('.expression-group').should('have.length', 1);
        cy.get('ecl-builder').contains('button','ADD REFINEMENT').click();
        cy.get('ecl-builder').find('.expression-group').should('have.length', 2);
    }
}
