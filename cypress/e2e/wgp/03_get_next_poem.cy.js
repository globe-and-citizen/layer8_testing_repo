/// <reference types="cypress" />

describe('get next poem', () => {
    beforeEach(() => {
        cy.loginAnonymouslyWGP();
    })

    it('gets the next poem', () => {
        // the poem should be empty at the start
        cy.get('td').eq(0).should('have.text', '')
        cy.get('td').eq(1).should('have.text', '')
        cy.get('td').eq(2).should('have.text', '')

        // get the next poem
        cy.contains('Get Next Poem').click()

        var prevTitle, prevAuthor, prevContent;
        cy.get('td').eq(0).then(($el) => {
            expect(prevTitle).to.not.equal('');
            prevTitle = $el.text();
        })
        cy.get('td').eq(1).then(($el) => {
            expect(prevAuthor).to.not.equal('');
            prevAuthor = $el.text();
        })
        cy.get('td').eq(2).then(($el) => {
            expect(prevContent).to.not.equal('');
            prevContent = $el.text();
        })

        // get the next poem
        cy.contains('Get Next Poem').click()

        cy.get('td').eq(0).should('not.have.text', prevTitle)
        cy.get('td').eq(1).should('not.have.text', prevAuthor)
        cy.get('td').eq(2).should('not.have.text', prevContent)
    })
})
