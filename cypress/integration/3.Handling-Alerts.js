/// <reference  types="Cypress" />

describe ('My first test case suite', function()
{
    it ('Alerts test case', function()
    {

        //browsing and clickin alert btn
        cy.visit('/AutomationPractice/');
        cy.get('#alertbtn').click();

    //manually handling alert with Mocha, hence Cypress auto accepts alerts
        cy.on('window:alert',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })      

        cy.get('#confirmbtn').click();
        cy.on('window:confirm',(str)=>

        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        } 
        )
   
}
)}
)