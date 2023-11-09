/// <reference types="cypress" />

import { faker } from "@faker-js/faker"

describe('login with api request', () => {

    beforeEach(() =>{
        cy.loginAndSetLocalStorege()
    })

    it('send login data', () => {
        cy.visit('http://5.189.186.217/overview')
        cy.get('div.card-content').eq(0).should('be.visible')

    })

    it('Create category', () => {
        let categoryName = faker.commerce.product()
        cy.createNewCategory(categoryName)
        cy.task('log', categoryName)
        cy.visit('http://5.189.186.217/categories')
        cy.wait(5000)
        cy.get('.content a.collection-item', {timeout: 5000}).should('be.visible')
    })


    it('create product for category', () => {
        let productName = faker.commerce.productName()
        cy.createProduct(productName)
        cy.task('log', productName)
        cy.visit(`http://5.189.186.217/categories/${Cypress.env('categoryId')}`)
        cy.get('a.collection-item span').eq(0)
        .should('be.visible')
        .contains(productName)
    })

    it('remove the category by id', () => {
        cy.removeCategoryById()
        cy.visit(`http://5.189.186.217/categories/${Cypress.env('categoryId')}`)
        .should('not.be.visible')
    })


})