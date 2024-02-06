describe('template spec', () => {
    it('passes', () => {
      
    //Launch browser tool
    cy.visit('https://dev-browser.ihtsdotools.org/')
      
    // Click on Accept cookies disclaimers
    cy.get('.iubenda-cs-accept-btn').click()
    cy.get('#accept-license-button-modal > .i18n').click()

    //Ensure SNOMED CT browser page is displayed
    cy.get('h1 > .i18n').should('have.text', 'SNOMED International SNOMED CT Browser')
      
      
    //Click on International Edition
    cy.get('#international_editions > :nth-child(1)').click()
      

    //Select the version - 2023-12-01
    cy.get('#version-selector > .btn').click()
    cy.get('#versionSwitcher > :nth-child(2) > a').click()
      

    // Uncheck the Group by concept checkbox if it is selected already
    if(cy.get('#fh-search_canvas-groupConcept').should('be.checked'))
    {
      //Uncheck the checkbox
      cy.get('#fh-search_canvas-groupConcept').uncheck()
      cy.log('Group by concept check box is uncheked')
      
    }  
    else
    {
      cy.log('Group by concept checkbox is already unchecked')
    }
      
    //Search heart and ensure that 3424 record count is displayed
    cy.get('#fh-search_canvas-searchBox').type('heart')
    cy.wait(1000)
    if(cy.get('#fh-search_canvas-searchBar > .text-muted').contains( '3424 matches found ' ))
    {
      cy.log('Search returns 3424 matches')
         
    }
    else
    {
      cy.log('Mis matches search results')
    }
            
    //Scroll the page
    cy.get('#fh-tabs-pane').scrollTo(0,500)

    //Select the body structure from the left hand panel under 'filter results by semantic tag'.
    cy.get(':nth-child(3) > .semtag-link').click()
      
      
    //Ensure that 220 record count is displayed 
    if(cy.get('#fh-search_canvas-searchBar > .text-muted').contains('220 matches found' ))
    {
      cy.get('#fh-tabs-pane').scrollTo(0,0)
      cy.log('Filter returns 220 matches')
      
    }
    else
    {
      cy.log('Mis matches filter results')
    }
      
    //Select Group by concept check box and ensure that 92 record count is displayed
    cy.get('#fh-search_canvas-groupConcept').click()
      

    if(cy.get('#fh-search_canvas-searchBar > .text-muted').contains('92 matches found' ))
    {
      cy.log('Filter returns 92 matches')  
    }
    else
    {
      cy.log('Mis matches filter results')
    }
     
    // Scroll to top and select the first concept from the search result
    cy.get('#fh-tabs-pane').scrollTo('top')
    cy.get('#fh-search_canvas-resultsTable > :nth-child(1) > :nth-child(1)').click()
      

    //Swap the view to Inferred
    cy.get('#home-fh-cd1_canvas-stated-button > .i18n').then(($btn) => {
    if($btn.hasClass('btn btn-primary'))
    {
      //switch to Inferred view
      cy.get('#home-fh-cd1_canvas-inferred-button').click()
      cy.log('Details page is switched to Inferred view')
      
    }
    else 
    {
      cy.log('Details page is already displayed in Inferred view')
    }
    })

    //Navigate to Details page
    cy.get('#details-tabs-fh-cd1_canvas > :nth-child(2) > a > .i18n').click()
    if(cy.get(':nth-child(1) > thead > :nth-child(1) > .text-center').should('have.text', 'United States of America English language reference set'))
    {
      cy.log('Details page is displayed')
    }

    //Click on the first description information icon
    cy.get(':nth-child(1) > tbody > .fsn-row > :nth-child(2) > .btn > .glyphicon').click()
    if(cy.get('.popover-content').should('be.visible'))
    {
      cy.log('Popover opens displaying more information about the description')
    }
    
    cy.get(':nth-child(1) > tbody > .fsn-row > :nth-child(2) > .btn > .glyphicon').click()

    //Navigate to Diagram page
    cy.get('#diagram-tab-link-fh-cd1_canvas > .i18n').click()
    if(cy.get('#diagram-canvas-fh-cd1_canvas-download-button').should('be.visible'))
    {
      cy.log('Diagram page is displayed')  
    }

    //Navigate to Expression page
    cy.get('#expression-tab-link-fh-cd1_canvas > .i18n').click()
    if(cy.get('#expression-canvas-fh-cd1_canvas > :nth-child(1)').contains('Pre-coordinated Expression'))
    {
      cy.log('Expression page is displayed')  
    }
    
    //Navigate to Refset page
    cy.get('#refsets-tab-link-fh-cd1_canvas > .i18n').click()
    if(cy.get('#refsets-fh-cd1_canvas > :nth-child(2) > thead > tr > th > .i18n').should('have.text', 'Simple Refsets Memberships'))
    {
      cy.log('Refset page is displayed')  
    }

    //Navigate to References page
    cy.get('#references-tab-link-fh-cd1_canvas > .i18n').click()
    if(cy.get('#references-2 > .panel-body > .table > thead > tr > :nth-child(1) > .i18n').should('have.text', 'Term'))
    {
      cy.log('References page is displayed')  
    }

    //Navigate to History page
    cy.get('#history-tab-link-fh-cd1_canvas > .i18n').click()
    if(cy.get('.col-md-9 > h4 > .i18n').contains('History'))
    {
      cy.log('History page is displayed')   
    } 
       
    //Load the last changed version by clicking the first date in the version column in the history tab.
    const datelink = cy.get(':nth-child(1) > [style="width:12.5%;"] > .history-item')
    datelink.click()
    if(cy.get(':nth-child(1) > tbody > .fsn-row > :nth-child(1)').should('contain', 'Heart structure (body structure)'))
    {
      cy.log('Successfully redirected to Details page from History page')     
    }
  })
})