
/// <reference  types="Cypress" />



describe ('My first test case suite', function()
{
    it ('Handling mouse hover', function()
    {

        //browsing and clickin alert btn
        cy.visit('/AutomationPractice/');

        //"el" variable is capturing all our html object
        cy.get('#opentab').then(function(el)
        {
            //using "prop" Jquery method to grab the href property
            const url=el.prop('href');
            cy.log(url);
            cy.visit(url)  
        }
        )
   
    }
)}
)