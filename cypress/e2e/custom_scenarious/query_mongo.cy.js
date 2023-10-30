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


context.skip ('UI & API request', () => {
    it('create user', () => {
        cy.request ({
            method: 'POST',
            url: '/api/users/registration',
            headers: {
                authorization: 'ssasd'
            },

            body: {
                firstName: 'fff3',
                lastname: 'sss3',
                username:'33',
                password:'333',

            }

        }

        )
        })
    })
})
