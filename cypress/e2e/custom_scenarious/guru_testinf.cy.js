/// <reference types="cypress" />

//заимпортили созданный патерн
import MainPage from '../../pages/main.js'
import PostmanPage from '../../pages/postman_page.js'
import {global_data} from '../../data/global_text.js'
//import { contains } from "cypress/types/jquery"

describe('Testing guru website', () => {

    //создали экземпляр класса
    const mainpage = new MainPage()
    const postmanpage = new PostmanPage()


    beforeEach(() => {
     cy.visit('https://www.guru99.com/')
//    // cy.setCookie('authCoka', 'someCookie')
//    // cy.loginAndSetCookie('https://www.guru99.com/')
    })
    
   it.skip ('open the site', () => {
        cy.get('h1.thick-heading', {timeout: 6000}).should('be.visible'); //correct syntax of timeout
        cy.get(4000) // incorrect syntax of timeout
        cy.get('h1.thick-heading').should('be.visible', {timeout: 6000}) // incorrect syntax of timeout
    })

    it.skip('check search and validate results', () => {
        cy.get('button.search-toggle-open').should('be.visible')
        .and('have.attr', 'data-toggle-target', '#search-drawer')
        .click();
        cy.get('input.search-field').should('be.visible')
        .and('have.attr', 'type', 'search')
        .type('functional testing{enter}')
        cy.url().should('contain', '/search_gcse?q=functional+testing')
        сy.get('div#resInfo-0').should('not.be.empty')
        .and('contain', 'About')
    })

    it.skip('click on software testing variant form dropdown list', () => {
        cy.get('#primary-menu span.nav-drop-title-wrap').eq(0).click()
        // cy.get('a[aria-current="page"] + ul.sub-menu.clicked').should('be.visible')

        cy.get('ul.sub-menu.clicked li').eq(7).find('a')
        .should('have.attr', 'href', '/software-testing.html')
        .and('have.text', 'Software Testing').click()

       // cy.get('div.code-block-1+h2').should('contain', 'Software Testing Training Summary')
       // .and('have.css', 'margin-top', '0px')
        cy.getCookie('authCoka').should('exist')

        cy.get('p strong').eq(1).then(($textFundamentalsElement) => { //add alias
           // $textFundamentalsElement.contents() //use alias
       // cy.wait($textFundamentalsElement) //use alias
       cy.wrap($textFundamentalsElement).should(('contain.text', 'Testing Fundamentals'))
       
        })
    })
// создали кейс с использованием патерна
    it('click on the postman link from dropdown POM', () => {
       mainpage.dropdownlist().eq(0).click()
       mainpage.elementindropdownlist().eq(16)
       .should('have.text', global_data.postman_text)
       .click()
       //postmanpage.imagewithPostmanDetails({timeout: 8000}).should('be.visible')
      
    })

    it('open page1', () => {
    //     cy.get('h1.thick-heading').then(($linkMainPage) => {
    //     debugger
    // })
//    cy.get('a[title="Software Testing"]').debug()
     cy.visit('https://www.guru99.com/software-testing.html')
     cy.log('test11111111')
     //cy.get('h2').pause()
     cy.task('log', { greeting: 'Hello', name: 'World' })
     //cy.get('table.table').eq(1).pause()
}) 
})