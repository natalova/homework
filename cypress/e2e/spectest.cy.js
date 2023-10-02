describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('test1', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.cypress.io');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('test2', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.cypress.io');
    cy.get('.text-\\[32px\\]').click();
    cy.get('.text-\\[32px\\]').click();
    cy.get('#dropdownProduct').click();
    cy.get('#dropdownDocs').click();
    cy.get('.pb-\\[32px\\] > .grid > :nth-child(2) > .mb-2').click();
    cy.get('.border > astro-slot').click();
    cy.get('.shrink-0 > .group').click();
    cy.get(':nth-child(2) > .fluid-container > astro-island > :nth-child(1) > .gap-x-\\[20px\\] > :nth-child(4) > .lg\\:relative > .mt-\\[8px\\]').click();
    cy.get('.max-w-\\[82vw\\] > .shiki').click();
    cy.get('.sm\\:w-\\[100px\\] > img').click();
    cy.get('[data-cy="main"]').click();
    cy.get('[data-cy="header-login"]').click();
    /* ==== End Cypress Studio ==== */
  });
})