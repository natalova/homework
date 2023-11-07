// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => 

// Cypress.Commands.add('loginAndSetCookie', (url, cookieN, cookieV) => {
//     cy.visit(url)
    
// })


// // login And Set Local Storege 

// Cypress.Commands.add('loginAndSetLocalStorege', () => {
//     cy.request({
//         method: 'POST',
//         url: 'http://5.189.186.217/api/auth/login',
//         body: {
//             email: 'email@dmytro.com',
//             password: 'abc123'
//         },
//     }).then((response) => {
//         const accessToken = response.body.token;
//         // Store the access token in local
//         localStorage.setItem('auth-token', accessToken);
//         localStorage.setItem('test', '11111');
//     });
// })

// create category and login from local storage

// Cypress.Commands.add('createNewCategory', (category) => {
//     const accessToken = window.localStorage.getItem('auth-token')
//     cy.request({
//         method: 'POST',
//         url: 'http://5.189.186.217/api/category',
//         body: {
//             name: category
//         },
//         headers: {
//             authorization: `${accessToken}`
//         }
//     }).then((response) => {
//         return response.body
//     })
// })

//import fs from 'fc-extra'

Cypress.Commands.add('loginAndSetLocalStorege', () => {
    cy.request({
        method: 'POST',
        url: 'http://5.189.186.217/api/auth/login',
        body: {
            email: 'email@dmytro.com',
            password: 'abc123'
        },
    }).then((response) => {
        const accessToken = response.body.token;
        // // Store the token in JSON
        // fs.whriteFileSync ('token.json', JSON.stringify (accessToken))
        // Store the access token in localstorage
        localStorage.setItem('auth-token', accessToken);
       
    });
})

// my Home work

// Cypress.Commands.add('createNewCategory', (category) => {
//     const accessToken = window.localStorage.getItem('auth-token')
//     cy.request({
//         method: 'POST',
//         url: 'http://5.189.186.217/api/category',
//         body: {
//             name: category
//         },
//         headers: {
//             authorization: `${accessToken}`
//         }
   
//     }).then((response) => {
//         const categotyId = response.body._id;
//         localStorage.setItem('category', categotyId);


//     //     const value = JSON.stringify(response.body._id)
//     //     cy.log(`Created category with ID: ${categotyId1}`);
//         return response.body._id
       
//     });
// })


Cypress.Commands.add('createNewCategory', (category) => {

    const accessToken = window.localStorage.getItem('auth-token')
    
    cy.request({
        method: 'POST',
        url: 'http://5.189.186.217/api/category',
        body: {
            name: category
        },
        headers: {
            authorization: `${accessToken}`
        }
    }).then((response) => {
        // steps fot getting the category id for the next iterations
        const categoryId = response.body._id;
  // Store the categoryId in Cypress environment variable
        Cypress.env('categoryId', categoryId);

        return response.body
    })
})

// my Home work

// Cypress.Commands.add('createNewPosition', (positionName, cost, categoryId) => {
//     const accessToken = localStorage.getItem('auth-token')
//     // cy.log(`FOFFFF AA222222: ${categotyId}`);

//     cy.request({
//         method: 'POST',
//         url: 'http://5.189.186.217/api/position',
//         body: {
//             name: positionName,
// 			cost: cost,
// 			category: categoryId,			
//         },
//         headers: {
//             authorization: `${accessToken}`
//         }
//     }).then((response) => {
//         return response.body
//     });
// })


Cypress.Commands.add('createProduct', (position) => {

    const accessToken = window.localStorage.getItem('auth-token');
    const categoryId = Cypress.env('categoryId');

    cy.request({
        method: 'POST',
        url: 'http://5.189.186.217/api/position',
        body: {
            category: categoryId,
            cost: 1,
            name: position
        },
        headers: {
            authorization: `${accessToken}`
        }
    }).then((response) => {
        return response.body
    })
})


Cypress.Commands.add('removeCategoryById', () => {
    const accessToken = localStorage.getItem('auth-token')
    const categoryId = Cypress.env('categoryId')

    cy.request({
        method: 'DELETE',
        url: `http://5.189.186.217/api/category/${categoryId}`,
       
        headers: {
            authorization: `${accessToken}`
        }
    }).then((response) => {
      
        expect(response.status).to.eq(200)
    })
})
