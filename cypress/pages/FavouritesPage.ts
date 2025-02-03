export class FavouritesPage {
    selectFavouritesTab() {
        cy.get('a[href="#fh-favorites_canvas"]').click();
        cy.get('#fh-favorites_canvas').should('have.class', 'active');
    }

    validateNumberOfFavourites(expectedNumberOfFavourites: number) {
        cy.get('#fh-favorites_canvas-panelBody').within(() => {
            cy.get('#tableFavs > tbody > tr').should('have.length', expectedNumberOfFavourites);
            cy.get('a.fav-item').should('have.length', expectedNumberOfFavourites);
        })
    }

    remove(index: number) {
        cy.get('#fh-favorites_canvas-panelBody').find('.glyphicon-remove-circle').eq(index).click();
    }
}
