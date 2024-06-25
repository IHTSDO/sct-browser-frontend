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

// Select the first concept
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

// Click on Canada Health Infoway French module filter
getCanadaHealthInfowayFrechModuleFilter(){
    cy.get(':nth-child(4) > .module-link').click()
    if(cy.get('#fh-search_canvas-moduleResumed').should('contain', 'Canada Health Info...'))
    {
        return cy.log('Canada Health Infoway French module filter is enabled and search results are displayed')
    }
}

// Click on dansk modul
getDanskModulFilter(){
    cy.get(':nth-child(3) > .module-link').click()
    if(cy.get('#fh-search_canvas-moduleResumed').should('contain', 'dansk modul...'))
    {
        return cy.log('Dansk Modul filter is enabled and search results are displayed')
    }
}

// Click on Estonian module
getEstonianModuleFilter(){
    cy.get(':nth-child(3) > .module-link').click()
    if(cy.get('#fh-search_canvas-moduleResumed').should('contain', 'Estonian module...'))
    {
        return cy.log('Estonian module filter is enabled and search results are displayed')
    }
}

// Click on Finnish module
getFinnishModuleFilter(){
    cy.get(':nth-child(3) > .module-link').click()
    if(cy.get('#fh-search_canvas-moduleResumed').should('contain', 'Finnish module...'))
    {
        return cy.log('Finnish module filter is enabled and search results are displayed')
    }
}

// Click on German module
getGermanModuleFilter(){
    cy.get(':nth-child(3) > .module-link').click()
    if(cy.get('#fh-search_canvas-moduleResumed').should('contain', 'German module...'))
    {
        return cy.log('German module filter is enabled and search results are displayed')
    }
}

// Click on Netherlands module
getNetherlandsModuleFilter(){
    cy.get(':nth-child(3) > .module-link').click()
    if(cy.get('#fh-search_canvas-moduleResumed').should('contain', 'module van Nederla...'))
    {
        return cy.log('Netherlands module filter is enabled and search results are displayed')
    }
}

// Click on Latin American Spanish Extension module
getLatinAmericanSpanishModuleFilter(){
    cy.get(':nth-child(3) > .module-link').click()
    if(cy.get('#fh-search_canvas-moduleResumed').should('contain', 'módulo de la exten...'))
    {
        return cy.log('Latin American Spanish Extension module filter is enabled and search results are displayed')
    }
}

// Click on Norwegian Extension module
getNorwegianModuleFilter(){
    cy.get(':nth-child(3) > .module-link').click()
    if(cy.get('#fh-search_canvas-moduleResumed').should('contain', 'norsk modul...'))
    {
        return cy.log('Norwegian Extension module filter is enabled and search results are displayed')
    }
}

// Select French language filter
getFrenchLanguageFilter(){
    cy.get(':nth-child(2) > .lang-link').click()
    if(cy.get('.label').should('contain', 'french'))
    {
        return cy.log('French language filter is enabled and search results are displayed')
    }
}

// Select the second concept
getSecondConcept(){
    //Select the second concept
    return cy.get(':nth-child(2) > :nth-child(1) > .result-item > a')
}

}

module.exports = SNOMEDCTBrowserPage
