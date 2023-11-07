/// <reference types="cypress" />

import { faker } from "@faker-js/faker"
import { homePage } from '../../data/cs_object.js';

describe('login', () => {

    beforeEach(() => {
        homePage.openHomePage()
       
       })

    it.skip('close Cookies popup', () => {
        homePage.closeCookiesPopup()
    })
    
    it.skip('close Country popup', () => {
        homePage.closeCountryPopup()
    })

    it('login exist valid customer', () => {
        homePage.closeCookiesPopup()
        homePage.closeCountryPopup()

        cy.get('a.header-badge.icon-account')
        .should('be.visible')
        .contains('Sign In')
        .click()
    
        cy.get('.c_popup').should('be.visible')
        cy.get('#customer_login_username').click().wait(2000)
        .type('kovaleva.ronis@gmail.com')
        cy.get('#customer_login_password').click().wait(2000)
        .type('333333')
        cy.get('button.btn.btn-primary.btn-block').click().wait(2000)

        cy.get('a.header-badge.icon-account').click()
        cy.url().should('eq', 'https://www.stage.csalon21.com/account/')

    })
    it('login doesnt exist customer', () => {
        homePage.closeCookiesPopup()
        homePage.closeCountryPopup()

        cy.get('a.header-badge.icon-account')
        .should('be.visible')
        .contains('Sign In')
        .click()
    
        cy.get('.c_popup').should('be.visible')
        cy.get('#customer_login_username').click().wait(3000)
        .type('11122233333@gmail.com')
        cy.get('#customer_login_password').click().wait(3000)
        .type('333333')
        cy.get('button.btn.btn-primary.btn-block').click().wait(3000)
        cy.get('#j-notification-messages').should('be.visible')
    })


    })

    