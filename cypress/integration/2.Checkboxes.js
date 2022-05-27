/// <reference  types="Cypress" />

describe ('My first test case suite', function()
{
    it ('Checkboxes test case', function()
    {

        //checkboxes
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1').uncheck().should('not.be.checked');
        cy.get('input[type="checkbox"]').check(['option1','option3']).should('be.checked').uncheck('option3').should('not.be.checked');
        

        //static Dropdown
        cy.get('select').select('option1').should('have.value','option1');

        //dynamic Dropdowns
        cy.get('#autocomplete').type('uni');

        cy.get('.ui-menu-item div').each(($el, index, $list) =>{

            if ($el.text() === 'United Kingdom (UK)')
            {
                $el.click();
            }

        cy.get('#autocomplete').should('have.value','United Kingdom (UK)');

        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');
        
        })

    })
}
)