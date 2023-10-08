import { users } from "../../data/search_text.js"

for (const {id, searchVal} of users) {
    it ('${id} check search', () => {
        cy.visit('/')
        cy.get('input#txtGlobalSearch')
        .click()
        .type('${searchVal}{enter}')
        cy.url().should('contain', searchVal)

      
    })
}