//pageObject
const selectTopic = '.bi-vector-pen';

export const homePage = {

  openHomePage() {
    cy.visit('https://www.stage.csalon21.com/')

      },


  closeCookiesPopup() {
    cy.get('div.c_popup-container.cookies-popup').should('be.visible')
    cy.get('.btn.btn-primary.btn-accept-all').click().wait(2000)

      },

  closeCountryPopup() {
    cy.get('div.c_popup-container.switcher_country_popup').should('be.visible')
    cy.get('.c_close').click().wait(2000)
  },


  logIn() {
    cy.get('div.c_popup-container.cookies-popup').should('be.visible')
    cy.get('.btn.btn-primary.btn-accept-all').click().wait(2000)
    cy.get('div.c_popup-container.switcher_country_popup').should('be.visible')
    cy.get('.c_close').click().wait(2000)
    cy.get('a.header-badge.icon-account')
    .click()
    cy.get('#customer_login_username').click()
    .type('kovaleva.ronis@gmail.com')
    cy.get('#customer_login_password').click()
    .type('333333')
    cy.get('button.btn.btn-primary.btn-block').click().wait(2000)
    cy.get('#j-notification-messages').should('be.visible')
  },

 
}