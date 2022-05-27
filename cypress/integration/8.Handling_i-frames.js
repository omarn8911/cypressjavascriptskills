
//importing cypress iframe
/// <reference types="cypress-iframe" />
import 'cypress-iframe';



describe ('My first test case suite', function()
{
    it ('Handling Frames', function()
    {

        //browsing and clickin alert btn
        cy.visit('/AutomationPractice/');
        //frameLoaded command comes from cypress-iframe library that's why we had to install: npm install cypress-iframe and import...
        cy.frameLoaded("#courses-iframe");
        //we'll use "eq" method below to target the specified index in the array of elements found with the CSS selector
        cy.iframe().find('a[href*="mentorship"]').eq(0).click();
        //we'll validate that the iframe has to plans (h1's) inside:
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2);
        

   
    }
)}
)