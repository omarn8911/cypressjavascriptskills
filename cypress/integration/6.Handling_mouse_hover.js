
/// <reference  types="Cypress" />

describe ('My first test case suite', function()
{
    it ('Handling mouse hover', function()
    {

        //browsing and clickin alert btn
        cy.visit('/AutomationPractice/');

        //Getting to the #mousehover child element = content using CSS selector adn showing it with "invoke" from jQuery
        cy.get('div.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include','top');

        //#Second requirement: Force click in the hidden element, withou hover the mouse

        cy.visit('/AutomationPractice/');
        cy.contains('Top').click({force: true });
        cy.url().should('include','top');
   
    }
)}
)