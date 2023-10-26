/// <reference types="cypress" />

describe('Create new position with categoryID and check via UI test', () => {

    beforeEach(() =>{
        cy.loginAndSetLocalStorege()
    })

    it('create category and position', () => {
         
        // Arrange 
        const positionName = 'New position 7';
        const positionCost = 2000;
        const categoryName = 'New category 7';
        
        // Act  
        cy.createNewCategory(categoryName)
        cy.createNewPosition(positionName, positionCost).wait(3000)
        const categotyId = localStorage.getItem('categotyId')
        //Assert
        //new category is created
        cy.visit('http://5.189.186.217/categories').wait(3000)
        cy.get('.content a.collection-item').should('be.visible')
        cy.contains('New category 7')
        .should('be.visible')
        .click()
        //new position is created
        //cy.visit(`http://5.189.186.217/categories/${categotyId}`)
        //cy.get('a.collection-item.collection-item-icon').should('be.visible')
        
        

    })
    })


   // const categotyId = window.localStorage.getItem('auth-token')
	

// 	it('create position', () => {  
      
//         // Arrange 
//        // const categotyId = window.localStorage.getItem('categotyId')
//         const positionName = 'my new position';
    
//         // Act  
//             cy.createNewPosition(positionName, 100).wait(5000)
//             cy.visit(`http://5.189.186.217/categories/${categotyId}`)
    
//         //Assert
//         //cy.contains(positionName).should('be.visible')
//         //cy.get('collection-item collection-item-icon').should('be.visible')
//         })
// })
    
//     it('should get category ID by name', () => {
//       cy.visit('http://5.189.186.217/categories'); // Replace with your actual page URL
  
//       // Perform any UI interactions or assertions as needed
  
//       // Now, use the custom command to get the category ID
//       cy.getCategoryIdByName('nataliatest1').then((categoryId) => {
//         // You can use categoryId in your further tests or assertions
//         cy.log(`Category ID for "nataliatest1": ${categoryId}`);


//         // Add a new position in the category
    //   const newPositionData = {
    //     name: 'NAMETEST3',
    //     cost: 67,
    //   };

//       cy.addNewPosition('nataliatest1', newPositionData).then((newPosition) => {
//         // Assuming the API returns the created position data
//         cy.log(`New Position added: ${JSON.stringify(newPosition)}`);
//         // Perform assertions or further UI interactions with the new position data
//       });
//     });
//   });
//});