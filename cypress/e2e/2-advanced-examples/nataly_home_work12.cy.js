/// <reference types="cypress" />

context('check the AIN website', () => {
  it('Open the main page and click startupds', () => {
    cy.visit('https://ain.ua')
    cy.get('#menu-item-1123667').children('a').click({force: true})  
    cy.url().should('contain', 'startapy/')
  })
})
  
