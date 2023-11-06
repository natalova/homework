//Home Work 19
//npm run cy:run_chrome -- --spec cypress/e2e/custom_scenarious/natalia_home_work19.cy.js

// Для проекту який ми налаштовували на лекції 'next-js-13-mongodb-registration-login-example'
// створити запит на створення юзера з даними з пекеджа faker
// поля: firstName, lastName, username, password
// після успішного запиту додати перевірку на поле username чи є базі
// (запит або в базу або до ендпойнта для отримання списку юзерів)

const {ObjectId} = require ("mongodb")
const {faker} = require ("@faker-js/faker")

describe('Find data', () => {

    context('usage of mongodb', () => {    
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
            url: 'http://localhost:3000/api/users/authenticate',
            body: {username:"user3", password: "123456"}
        }).then ((response) => {
        const authToken = response.body.token
        Cypress.env('authTNext13', authToken)
    })
})

    it('create user', () => {
        let firstName = faker.person.firstName()
        let lastName = faker.person.lastName()
        let userName = faker.internet.userName()
        let userPass = faker.internet.password()
        
        cy.request ({
            method: 'POST',
            url: 'http://localhost:3000/api/users/register',
            headers: {
                authorization: `Bearer ${Cypress.env('authTNext13')}`
            },
            body: {
                firstName: firstName,
                lastName: lastName,
                username:userName,
                password: userPass,
       }
    })

        cy.request({
            method: "GET",
            url: "http://localhost:3000/api/users",
            headers: {
                Authorization: `Bearer ${Cypress.env("authTNext13")}`,
            },
        }).then((response) => {
            const newUser = response.body
            const newFakerUser = newUser.some(
                (user) => user.username === userName
                )
                expect(newFakerUser).to.be.true
                cy.log(`Created new user via faker: ${newFakerUser}`);
                cy.task('log', newFakerUser)
                
            })
        })
    })


        it('findMany', () => {
            cy.findMany({},{collection: 'users'}).then((mongoresult) => {
                cy.task('log', mongoresult)
            })
        })
    })

