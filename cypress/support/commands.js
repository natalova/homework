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
        // Store the access token in local
        localStorage.setItem('auth-token', accessToken);
        localStorage.setItem('test', '11111');
    });
})

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
        const categotyId = response.body._id;
        localStorage.setItem('category', categotyId);


    //     const value = JSON.stringify(response.body._id)
    //     cy.log(`NNNNNNNNNNNNNNNNN: ${JSON.stringify(response.body._id)}`);
    //     const categotyId1 = response.body._id;
	// 	localStorage.setItem('categotyId', value);
    //     localStorage.setItem('test', '22222');

    //     cy.log(`Created category with ID: ${categotyId1}`);
    //    // Cypress.env('categoryId', categoryId);
    //    // return response.body
       
    });
})

//Cypress.Commands.overwrite('log', (subject, message) => cy.task('log', message));


Cypress.Commands.add('createNewPosition', (positionName, cost) => {
    const accessToken = localStorage.getItem('auth-token')
    const categotyId = localStorage.getItem('categotyId')
    // const test = localStorage.getItem('test')

    // //const categotyId = localStorage.getItem('categotyId')
    // cy.log(`FOFFFF DIMAAA: ${accessToken}`);
    // cy.log(`FOFFFF DIMAAA222222: ${categotyId}`);

    cy.request({
        method: 'POST',
        url: 'http://5.189.186.217/api/position',
        body: {
            name: positionName,
			cost: cost,
			category: categotyId,			
        },
        headers: {
            authorization: `${accessToken}`
        }
    }).then((response) => {
        return response.body
    });
})

