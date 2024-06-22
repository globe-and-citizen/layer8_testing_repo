/// <reference types="cypress" />

describe('upload and display images', () => {
    it('uploads images and confirms they are displayed', () => {
        cy.visit('http://localhost:5173')
        cy.wait(500)

        // upload images
        cy.get('input[name="upload"]').selectFile('cypress/fixtures/image1.jpg', { force: true })
        cy.get('img[alt="image1.jpg"]').should('exist')

        cy.get('input[name="upload"]').selectFile('cypress/fixtures/image2.jpg', { force: true })
        cy.get('img[alt="image2.jpg"]').should('exist')

        cy.get('input[name="upload"]').selectFile('cypress/fixtures/image3.jpg', { force: true })
        cy.get('img[alt="image3.jpg"]').should('exist')

        cy.get('input[name="upload"]').selectFile('cypress/fixtures/image4.jpg', { force: true })
        cy.get('img[alt="image4.jpg"]').should('exist')

        cy.get('input[name="upload"]').selectFile('cypress/fixtures/image5.jpg', { force: true })
        cy.get('img[alt="image5.jpg"]').should('exist')

        cy.get('input[name="upload"]').selectFile('cypress/fixtures/image6.jpg', { force: true })
        cy.get('img[alt="image6.jpg"]').should('exist')

        // the number of images in the gallery should be at least the number of images uploaded
        cy.get('.gallery').find('img').should('have.length.gte', 6)
    })
})
