/// <reference types="cypress" />

describe('Testing cypress website', () => {
   
    beforeEach(() => {
     cy.visit('https://www.cypress.io/subscribe/')
    
    })

    it('1 - page URL', () => {
        cy.url().should('eq', 'https://www.cypress.io/subscribe/')
      })

     
    it('2 - verify the page title', () => {
        cy.title().should('contain', 'Stay in the loop')
    })
    
    it('3 - visible form', () => {
        cy.get('.relative').should('be.visible')
    })

    it('4 - visible imput', () => {
        cy.get('#subscribe_email').should('be.visible')
    })
    

    it('5 - message after valid submit', () => {
         cy.get('#subscribe_email').should('be.visible')
         cy.get('#subscribe_email').click().wait(3000)
         .type('test+3@gmail.com')
         cy.contains('Subscribe today').click()
         cy.contains('Thank you for subscribing!'). should('be.visible')
     })
     
     it('6 - message after invalid submit', () => {
        cy.get('#subscribe_email').should('be.visible')
        cy.get('#subscribe_email').click().wait(3000)
        .type('123')
        cy.contains('Subscribe today').click()
        cy.contains('Please enter a valid email address'). should('be.visible')
    })
    
    it('7 - submit empty form', () => {
        cy.get('#subscribe_email').should('be.visible')
        cy.get('#subscribe_email').click().wait(3000)
        .type('123')
        cy.get('#subscribe_email').clear()
        cy.contains('Subscribe today').click()
        cy.get('#subscribe_email').should('have.value', '')
    })

    it('8 - footer links display', () => {
        cy.get('.footer-legal').should('be.visible')
    })

    it('9 - footer items display', () => {
        cy.viewport(1440, 1024).wait(3000)
        cy.get('.footer-legal > ul > li > a').eq(0)
        .contains('Privacy Policy')
        .click({force: true}).wait(2000)
    })
       

    it('10 - go back after click on the footer item', () => {
        cy.get('.footer-legal > ul > li > a').eq(-1)
        .click({force: true}).wait(2000)
        cy.wait(2000).go('back')
       
    })
     
    it('11 - footer items link', () => {
        cy.get('.footer-legal > ul > li > a').eq(-2)
        .should('have.attr', 'href', '#')
        .click({force: true}).wait(2000)
        cy.contains('Storage Preferences'). should('be.visible')
    })

     })