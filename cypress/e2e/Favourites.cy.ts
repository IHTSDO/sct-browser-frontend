import StartPage from "../pages/StartPage";
import SearchPage from "../pages/SearchPage";
import FavouritesPage from "../pages/FavouritesPage";

const startPage = new StartPage();
const searchPage = new SearchPage();
const favoritesPage = new FavouritesPage();

const urlBrowser = Cypress.env('URL_BROWSER');

describe("Favourites", () => {

    before(() => {
        cy.clearAllCookies();
    })

    it(`Launch browser at ${urlBrowser}`, () => {
        startPage.visit(urlBrowser);
    })

    it(`Accept cookies`, () => {
        startPage.acceptCookies();
    })

    it(`Accept license agreement`, () => {
        startPage.acceptLicenseAgreement();
    })

    it(`Select International Edition`, () => {
        startPage.selectInternationalEdition();
    })

    it(`Search for 'heart' and validate the result`, () => {
        searchPage.search('heart');
        searchPage.validateSearchResult(null);
    })

    it(`Load the first concept`, () => {
        searchPage.loadConceptByIndex(0);
    })

    it(`Add it to Favorites by clicking a star button in the Summary tab`, () => {
        searchPage.addToFavourites();
    })

    it(`Load the fifth concept`, () => {
        searchPage.loadConceptByIndex(4);
    })

    it(`Add it to Favorites as before`, () => {
        searchPage.addToFavourites();
    })

    it(`Navigate to Favorites tab`, () => {
        favoritesPage.selectFavouritesTab();
    })

    it(`Make sure there are 2 entries there - those added before`, () => {
        favoritesPage.validateNumberOfFavourites(2);
    })

    it(`Delete the first entry by clicking the 'x' button to the right`, () => {
        favoritesPage.remove(0);
        favoritesPage.validateNumberOfFavourites(1);
    })

    it(`Delete the second entry by clicking the star button in the Summary tab`, () => {
        searchPage.removeFromFavourites();
        favoritesPage.validateNumberOfFavourites(0);
    })

})
