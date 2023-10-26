/// <reference types="cypress" />



describe('login with api request', () => {

    beforeEach(() =>{
        cy.loginAndSetLocalStorege()
    })

    it('send login data', () => {
        cy.visit('http://5.189.186.217/overview')
        cy.get('div.card-content').eq(0).should('be.visible')

    })

    it('create category', () => {
        cy.createNewCategory('cat1')
        cy.visit('http://5.189.186.217/categories')
       // cy.get('content a.collection-item').should('be.visible')


    })
})