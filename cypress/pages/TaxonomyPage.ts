export class TaxonomyPage {

   // Select Able to thrive (finding)
   getAbletoThrive() {
      cy.get('#fh-taxonomy_canvas-treenode-1148601009').click()
      if (cy.get('#home-attributes-fh-cd1_canvas').should('contain', 'Able to thrive (finding)')) {
         return cy.log('Able to thrive (finding) concept details is displayed')
      }
   }

   // Select Abnormal blood oxygen pressure (finding)
   getAbnormalBloodFinding() {
      cy.get('#fh-taxonomy_canvas-treenode-123821009').dblclick()
      if (cy.get('#fh-taxonomy_canvas-selectedConceptTerm').should('have.text', 'Abnormal blood oxygen pressure (finding)')) {
         return cy.log('Abnormal blood oxygen pressure is loaded in the taxonomy')
      }
   }

   // Navigate up the taxonomy - Expand the tree
   getExpandClinicalFinding() {
      cy.get('#fh-taxonomy_canvas-treeicon-404684003').click()
      if (cy.get('li[data-concept-id="138875005"]').should('contain', 'SNOMED CT Concept (SNOMED RT+CTV3)')) {
         return cy.log('Taxonomy expands upwards')
      }
   }

   // Switch to stated view
   getStatedView() {
      cy.get('.navbar > .nav > :nth-child(1) > .dropdown-toggle > .caret').click()
      cy.get('#fh-taxonomy_canvas-statedViewButton').click()
      cy.get('#home-fh-cd1_canvas-stated-button').click()
      if (cy.get('#fh-taxonomy_canvas-txViewLabel > .i18n').should('have.text', 'Stated view')) {
         return cy.log('Switched to Stated View from Inferred view')
      }
   }

   // Verify Abnormal blood oxygen pressure has no children
   getAbormalBloodOxygenNoChild() {
      if (cy.get('#fh-taxonomy_canvas-treenode-123823007').should('not.exist') &&
          cy.get('#fh-taxonomy_canvas-treenode-123822002').should('not.exist')) {
         return cy.log('Abnormal blood oxygen pressure now has no children after switch to stated view')
      }
   }

   // Turn descendants count on
   getTurnDescendantsCountOn() {
      cy.get('#fh-taxonomy_canvas-clearConceptButton').click()
      cy.get('#fh-taxonomy_canvas-txViewLabel2').click()
      cy.get('#fh-taxonomy_canvas-descendantsCountTrue').click()
      if (cy.get('#fh-taxonomy_canvas-txViewLabel2 > [data-i18n-id="i18n_on"]').should('have.text', 'On')) {
         return cy.log('Descendants count turn to ON ')
      }
   }

   // Verify Descendants count is displayed
   getTurnDescendantsCountValue() {
      if (cy.get('#fh-taxonomy_canvas-treenode-404684003').should('contain', /^[0-9]/)) {
         return cy.log('The number of descendants is displayed next to each concept')
      }
   }

   // Change the language to 'PT in US'
   getChangeLanguage() {
      cy.get('#fh-taxonomy_canvas-txLanguageSwitcherLabel').click()
      cy.get('#fh-taxonomy_canvas-txLangage-900000000000509007-pt').click()
      if (cy.get('#fh-taxonomy_canvas-txLanguageSwitcherLabel > :nth-child(1)').should('have.text', 'Language: PT in US')) {
         return cy.log('Langugae changed to PT in US')
      }
   }

   // Verify brackets are removed from the concept name in PT in US language
   getLanguageResult() {
      if (cy.get('#fh-taxonomy_canvas-treenode-404684003').should('not.have.text', '(finding)')) {
         return cy.log('Brackets are removed from the concept name in PT in US language')
      }
   }

   // Remove the taxonomy focus concept
   getRemoveTaxonomyFocusConcept() {
      cy.get('#fh-taxonomy_canvas-clearConceptButton').click()
      if (cy.get('#fh-taxonomy_canvas-treenode-138875005').should('be.visible')) {
         return cy.log('Taxonomy focus concept is remved and Top level hierarchy is loaded')
      }
   }

   // Reset the taxonomy
   getResetTaxonomy() {
      cy.get('#fh-taxonomy_canvas-resetButton').click()
      if (cy.get('#fh-taxonomy_canvas-treenode-404684003').should('be.visible')) {
         return cy.log('Taxonomy is refreshed')
      }
   }

}
