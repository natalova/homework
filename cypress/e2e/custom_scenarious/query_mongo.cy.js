const {ObjectId} = require ("mongodb")


//import {ObjectId} from 'mongodb'

describe('Find data', () => {

    context ('usage of mongodb', () => {
    
    
        it('findMany', () => {
        cy.findMany({},{collection: 'users'}).then((mongoresult) => {
            cy.task('log', mongoresult)
        })
    })
})


context('UI & API request', () => {

    it('login by UI', () => {

        cy.request({
            method: 'POST',
            url: '/api/users/authenticate',
            body: {username:"user3", password: "123456"}
        }).then ((response) => {
        const authToken = response.body.token
        Cypress.env('authTNext13', authToken)
        })
    })

    it('create user', () => {
        cy.request ({
            method: 'POST',
            url: '/api/users/register',
            headers: {
                authorization: `Bearer ${Cypress.env('authTNext13')}`
            },

            body: {
                firstName: 'Nata',
                lastName: 'Testlast',
                username:'nataliatestcreate',
                password:'qwe123',
       }
    })
 })

        it('findMany', () => {
            cy.findMany({},{collection: 'users'}).then((mongoresult) => {
                cy.task('log', mongoresult)
            })
        })
    })
})
