class RefsetTabPage {

// Select RefsetTab
getRefsetTab(){
    cy.get('a[href="#fh-refset_canvas"]').click()
    if(cy.get('#fh-refset_canvas-panelTitle > strong > .i18n').should('have.text', 'Refsets'))
    {
        return cy.log('Refset page is displayed')
    }
}

// Load the first refset
getFirstRefset(){
    cy.get(':nth-child(1) > :nth-child(2) > .refset-item > .badge').click()
    if(cy.get('#home-attributes-fh-cd1_canvas > h4').should('contain', 'ALTERNATIVE association reference set (foundation metadata concept)') && 
    cy.get('#fh-refset_canvas-resultsTable').should('be.visible'))
    {
       return cy.log('Selected first Refset concept is loaded in details and members section populated bottom left')
    }
}

// Load the first concept from the members list
getFirstConceptMembersList(){
    cy.get('.bottom_panel').scrollTo(0,50)
    cy.get('tbody > :nth-child(1) > :nth-child(1) > .badge').click()
    if(cy.get('#home-attributes-fh-cd1_canvas > h4').should('contain', 'Malignant tumor involving uterine cervix by separate metastasis from fallopian tube (disorder)'))
    {
        return cy.log('Selected first concept from members list is loaded into the details panelsection') 
    }
}

// Sort the refset table by the active members
getSortRefset(){
    cy.get('[data-i18n-id="i18n_active_members_count"]').click()
    if(cy.get(':nth-child(1) > .sorting_1').contains(/10|[1-9]/))
    {
        return cy.log('Members with the lowest counts are displayed first')
    }
}

}

module.exports = RefsetTabPage