
const selectTopic = '.bi-vector-pen';

export const mainPage = {

  openForumpage() {
    cy.visit('https://dou.ua/forums/');

      },

  verifyElements() {
    cy.get(selectTopic).should('be.visible');
  },

  clickonBlog() {
    cy.get(selectTopic).click();
    cy.get('.select').contains('Блоги').should('be.visible');
  },

  firstItemBlog() {
    cy.get('.b-forum-articles:first').should('be.visible');
  },
 
}