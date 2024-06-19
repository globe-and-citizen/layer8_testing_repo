/// <reference types="cypress" />

const images = Array.from({ length: 6 }, (_, i) => `image${i + 1}.jpg`)

describe('upload and display images', () => {
    it('uploads images', () => {
        cy.visit('http://localhost:5173')
        cy.wait(500)
        images.forEach((image) => {
            cy.get('input[name="upload"]').selectFile(`cypress/fixtures/${image}`, { force: true })
        })
    })

    it('displays the images in the gallery', () => {
        cy.visit('http://localhost:5173')
        cy.wait(500)
        // the number of images in the gallery should be at least the number of images uploaded
        cy.get('.gallery').find('img').should('have.length.gte', images.length)
        // each image should have an alt attribute
        images.forEach((image) => {
            cy.get(`img[alt="${image}"]`).should('exist')
        })
    })
})
