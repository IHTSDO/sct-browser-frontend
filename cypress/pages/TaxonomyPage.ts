export default class TaxonomyPage {
   verifyConceptExpanded(conceptId: string, childConceptId: string) {
      cy.get('#fh-taxonomy_canvas')
          .find('li[data-concept-id="' + conceptId + '"]').should('exist')
          .find('ul').should('exist')
          .children('li').should('have.length.at.least', 1);

      cy.get('#fh-taxonomy_canvas-treeicon-' + conceptId).should('be.visible').and('have.class', 'glyphicon-chevron-down');
      if (childConceptId) {
         cy.get('#fh-taxonomy_canvas-treenode-' + childConceptId).should('be.visible');
      }
   }

   selectTaxonomyTab() {
      cy.get('a[href="#fh-taxonomy_canvas"]').click();
      cy.get('#fh-taxonomy_canvas').should('have.class', 'active');
   }

   selectConcept(conceptId: string) {
      cy.get('#fh-taxonomy_canvas-treenode-' + conceptId).click();
      cy.get('#home-attributes-fh-cd1_canvas').find('a[data-concept-id="' + conceptId + '"]').should('exist').and('be.visible');
   }

   setFocusConcept(conceptId: string) {
      cy.get('#fh-taxonomy_canvas-treenode-' + conceptId).as('focusConcept').invoke('attr', 'data-term').then((value) => {
         cy.get('@focusConcept').dblclick();
         cy.get('#fh-taxonomy_canvas-selectedConceptTerm').should('have.text', value);
      });
   }

   navigateUp(conceptId: string, parentConceptId: string) {
      cy.get('#fh-taxonomy_canvas-treenode-' + parentConceptId).should('not.exist');
      cy.get('#fh-taxonomy_canvas-treeicon-' + conceptId).click();
      cy.get('#fh-taxonomy_canvas-treenode-' + parentConceptId).should('exist').and('be.visible');
   }

   switchToStatedView() {
      cy.get('#fh-taxonomy_canvas-txViewLabel').as('viewToggle').should('contain', 'Inferred view').click();
      cy.get('#fh-taxonomy_canvas-statedViewButton').click();
      cy.get('@viewToggle').should('contain', 'Stated view');
   }

   verifyConceptHasNoChildren(conceptId: string) {
      cy.get('#fh-taxonomy_canvas').find('li[data-concept-id="' + conceptId + '"]').find('ul').should('not.exist');
   }

   turnDescendantsCountOn() {
      cy.get('#fh-taxonomy_canvas-txViewLabel2').as('countToggle').should('contain', 'Off').click();
      cy.get('#fh-taxonomy_canvas-descendantsCountTrue').click();
      cy.get('@countToggle').should('contain', 'On');
   }

   verifyDescendantsCountIsDisplayed(conceptId: string) {
      ///^[0-9]+$/
      let descendants = '';

      cy.get('#fh-taxonomy_canvas-treenode-' + conceptId).as('concept').then(($el) => {
         descendants = $el.contents().eq(2).text();
      });
      cy.get('@concept').invoke('attr', 'data-descendants').then((value) => {
         expect(value).to.eq(descendants);
      });
   }

   changeLanguageToPtInUs() {
      cy.get('#fh-taxonomy_canvas-txLanguageSwitcherLabel').as('languageToggle').should('contain', 'FSN in US').click();
      cy.get('#fh-taxonomy_canvas-txLangage-900000000000509007-pt').click();
      cy.get('@languageToggle').should('contain', 'PT in US');
   }

   verifyPtIsDisplayed(conceptId: string) {
      let text = '';

      cy.get('#fh-taxonomy_canvas-treenode-' + conceptId).as('concept').then(($el) => {
         text = $el.contents().eq(0).text();
      });
      cy.get('@concept').invoke('attr', 'data-fsn').then((value) => {
         expect(value).to.not.eq(text);
      });
      cy.get('@concept').invoke('attr', 'data-preferred-term').then((value) => {
         expect(value).to.eq(text);
      });
   }

   removeFocusConcept() {
      cy.get('#fh-taxonomy_canvas-clearConceptButton').click();
   }

   resetTaxonomy() {
      cy.get('#fh-taxonomy_canvas-resetButton').click();
   }
}
