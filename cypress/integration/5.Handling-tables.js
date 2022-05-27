
/// <reference  types="Cypress" />

describe ('My first test case suite', function()
{
    it ('Handling tables', function()
    {

        //browsing and clickin alert btn
        cy.visit('/AutomationPractice/');

       //Getting the column I want with CSS selector and iterating

       cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

        const text=$el.text();
        if(text.includes("Python"))
        {
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
            {
                const priceText = price.text()
                expect(priceText).to.equal('25')
            }
            )
           
        }

       }

       )
   
    }
)}
)