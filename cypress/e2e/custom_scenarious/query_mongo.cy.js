const {ObjectId} = require ('mongodb')

//import {ObjectId} from 'mongodb'

describe('Find data', () => {

    it('findMany', () => {
        cy.findMany({},{collection: 'users'}).then((mongoresult) => {
            cy.task('log', mongoresult)
        })
    })

})
