import {it} from "mocha"
import {StartPage} from "../pages/StartPage"
import { QaStatPage } from "../pages/QaStatsPage"

const startPage = new StartPage()
const qaStatPage = new QaStatPage()

describe("QA Stat", () => {

    it(`Launch browser at ${startPage.urlBrowser + + '/qa/'}`, () => {
        startPage.visitQaStatPage();
        cy.wait(2000);
    })

    Cypress.$.each(['International Edition', 'Austrian Edition', 'Australian Edition',
                    'Belgian Edition', 'Swiss Edition', 'Danish Edition',
                    'Estonian Edition', 'French Edition', 'Irish Edition',
                    'Netherlands Edition', 'Norwegian Edition', 'New Zealand Edition',
                    'Swedish Edition', 'United States Edition'], (index, value) => {

        it(`Select ` + value, () => {
            qaStatPage.selectEditionByName(value);
        })

        it(`Select and verify DESCRIPTIVE STATISTICS tab in the ` + value, () => {
            qaStatPage.selectTabByName('DESCRIPTIVE STATISTICS');
            cy.get('.primary-charts').first().should('be.visible');
            cy.get('.secondary-charts ').first().should('be.visible');
        })

        it(`Select and verify GENERAL RELEASE STATISTICS tab in the ` + value, () => {
            qaStatPage.selectTabByName('GENERAL RELEASE STATISTICS');            
            cy.get('.general-release-statistics table').first().should('be.visible').within(() => {
                cy.get('thead > tr').children('th').should('have.length', 5);
                cy.get('tbody').children('tr').should('have.length.at.least', 1);
            });
        })

        it(`Select and verify NEW CONCEPTS tab in the ` + value, () => {
            qaStatPage.selectTabByName('NEW CONCEPTS');
            cy.get('.new-concepts table').first().should('be.visible').within(() => {
                cy.get('thead > tr').children('th').should('have.length', 5);
                cy.get('tbody').children('tr').should('have.length.at.least', 1);
            });
        })

        it(`Select and verify INACTIVATED CONCEPTS tab in the ` + value, () => {
            qaStatPage.selectTabByName('INACTIVATED CONCEPTS');
            cy.get('.inactivated-concepts table').first().should('be.visible').within(() => {
                cy.get('thead > tr').children('th').should('have.length', 3);
                cy.get('tbody').children('tr').should('have.length.at.least', 1);
            });
        })

        it(`Select and verify CHANGES TO CONCEPTS tab in the ` + value, () => {
            qaStatPage.selectTabByName('CHANGES TO CONCEPTS');
            cy.get('.concept-changes-counts table').first().should('be.visible').within(() => {
                cy.get('thead > tr').children('th').should('have.length', 5);
                cy.get('tbody').children('tr').should('have.length.at.least', 1);
            });
        })

        it(`Select and verify RELEASE SUMMARY tab in the ` + value, () => {
            qaStatPage.selectTabByName('RELEASE SUMMARY');
            cy.get('.release-summary table').first().should('be.visible').within(() => {
                cy.get('thead > tr').children('th').should('have.length', 34);
                cy.get('tbody').children('tr').should('have.length.at.least', 1);
            });
        })
    })

})
