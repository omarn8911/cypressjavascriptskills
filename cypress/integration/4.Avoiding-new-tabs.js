
/// <reference  types="Cypress" />

describe ('My first test case suite', function()
{
    it ('Alerts test case', function()
    {

        //browsing and clickin alert btn
        cy.visit('AutomationPractice/');

        //invoke('removeAttr') JQuery function to remove html attributes from current html element
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.url().should('be.equal', 'https://www.rahulshettyacademy.com/#/index');
        //.should('include','rahulshetty') could work too but not suficcient to validate  in this case

        //manage navigation on the browser

        cy.go('back');
        cy.url().should('be.equal','https://rahulshettyacademy.com/AutomationPractice/');
   
}
)}
)