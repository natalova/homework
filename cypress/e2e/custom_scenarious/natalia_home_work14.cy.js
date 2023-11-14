/// <reference types="cypress" />

//import created object pattern 
import { mainPage } from '../../data/dou_testC';


describe('Page Object Pattern test', () => {


  beforeEach(() => {
    mainPage.openForumpage()
   
   })

    it('check forum item', () => {
    
      mainPage.verifyElements()
    })

    it('check first blog article', () => {
   
      mainPage.clickonBlog()
      mainPage.firstItemBlog()
      
    })
 
})