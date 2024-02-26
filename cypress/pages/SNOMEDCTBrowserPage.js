class SNOMEDCTBrowserPage{

// -- Select version
getVersionSelector(){
    return cy.get('#version-selector > .btn')
}

getSelectVersion(){
    return cy.get('#versionSwitcher > :nth-child(2) > a')
}

// Uncheck the Group by concept checkbox if it is selected already
getUnchekGroupbyConcept(){
    cy.get('#fh-search_canvas-groupConcept').as('checkbox').invoke('is', ':checked').then(checked => {
        if (checked) {
            return cy.get('#fh-search_canvas-groupConcept').uncheck()
        } else {
            return cy.log('Group by concept checkbox is already unchecked')
        }
    })

}

//Search text in search textbox
getSearch(){
    return cy.get('#fh-search_canvas-searchBox')
}

getValidateSearchResult(searchvalidationText){
    if(cy.get('#fh-search_canvas-searchBar > .text-muted').contains( searchvalidationText ))
    {
      return cy.log('Search returns matching records')
         
    }
    else
    {
      return cy.log('Mis matches search results')
    }
}

//Select the body structure from the left hand panel under 'filter results by semantic tag'.
getBodyStructureSemanticTag(){
    return cy.get(':nth-child(3) > .semtag-link')
}

// Check the Group by concept checkbox
getChekGroupbyConcept(){
    return cy.get('#fh-search_canvas-groupConcept')
}

// Select the concept
getConcept(){
    //Select the first concept
    return cy.get('#fh-search_canvas-resultsTable > :nth-child(1) > :nth-child(1)')
}

// Select Spanish language
getSpanishlanguage(){
    cy.get(':nth-child(2) > .lang-link').click()
    if(cy.get('.label').should('contain', 'spanish'))
    {
        return cy.log('Spanish language filter is enabled and search results are displayed')
    }
}

// Assert that the first result has a flag in the first column in the search results
getResultHaveFlags(){
    cy.get(':nth-child(1) > :nth-child(1) > .result-item > .phoca-flagbox > .phoca-flag').should('be.visible')
    return cy.log('A flag should be present next to each result')  
}

// Click on Österreichisches Module filter
getÖsterreichischesModuleFilter(){
    cy.get(':nth-child(3) > .module-link').click()
    if(cy.get('#fh-search_canvas-moduleResumed').should('contain', 'Österreichisches M...'))
    {
        return cy.log('Österreichisches module filter is enabled and search results are displayed')
    }
}

// Click on Belgian module filter
getBelgianModuleFilter(){
    cy.get(':nth-child(3) > .module-link').click()
    if(cy.get('#fh-search_canvas-moduleResumed').should('contain', 'Belgian module...'))
    {
        return cy.log('Belgin module filer is enabled and search results are displayed')
    }
}
}

module.exports = SNOMEDCTBrowserPage