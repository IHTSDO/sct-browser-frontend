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

getValidateSearchResult(){
    if(cy.get('#fh-search_canvas-searchBar > .text-muted').contains( 'matches found in ' ))
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

}

module.exports = SNOMEDCTBrowserPage