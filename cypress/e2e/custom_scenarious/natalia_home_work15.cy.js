/// <reference types="cypress" />
describe('save url', () => {
   
    const url = [
        'https://dou.ua/',
        'https://dou.ua/forums/',
        'https://dou.ua/lenta/',
        'https://jobs.dou.ua/trends/',
        'https://dou.ua/calendar/',
        'https://dou.ua/calendar/tags/%D0%BA%D1%83%D1%80%D1%81%D1%8B/?from=evquick'
    ];
    
    it('save url to json', () => {

      cy.task('savedUrl', { url, nameOfJsonFile: 'dou_url' })
 
    })
  
})