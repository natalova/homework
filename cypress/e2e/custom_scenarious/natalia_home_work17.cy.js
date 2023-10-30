/// <reference types="cypress" />

describe('Create new position with categoryID and check via UI test', () => {

    beforeEach(() =>{
        cy.loginAndSetLocalStorege()
    })

    it('create category and position', () => {
         
        // Arrange 
        const positionName = 'New position 9';
        const positionCost = 6000;
        const categoryName = 'New category 9';
        var categoryId = '';

        // Act
        cy.wrap(null).then(() =>
            cy.createNewCategory(categoryName).then((data) => {
                categoryId = data
        }));        
        cy.wrap(null).then(() => {
            cy.createNewPosition(positionName, positionCost, categoryId)
        });
            
        //Assert
       
           //new category is created
        cy.wrap(null).then(() => {
            cy.visit('http://5.189.186.217/categories')
            cy.get('.content a.collection-item').should('be.visible')
            cy.contains('New category 7')
            .should('be.visible')
            .click()
           
            //new position is created        
            cy.visit(`http://5.189.186.217/categories/${categoryId}`)
            cy.get('a.collection-item.collection-item-icon').should('be.visible')
        });
    })
    })