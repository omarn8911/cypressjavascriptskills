//importing ProductPage Page Object Design
import CheckoutPage from '../integration/pageObjects/CheckoutPage';
import ProductPage from '../integration/pageObjects/ProductPage'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//-- This is a parent command --
Cypress.Commands.add('SelectProduct', (name) => {
    
    //instanciating ProducPage class in object to use methods:
    const productPage = new ProductPage();
    productPage.getProductsArray().each(($el, index, $list) =>
    {
        if($el.text().includes(name)){
            //eq command extracts the infex value in the moment of iteration
            productPage.getAddProductButton().eq(index).click();
        }
    })

    })

Cypress.Commands.add('VerifyProduct',(name) => {
    cy.get('h4>a').each(($el, index, $list) =>
    {
        if($el.text().includes(name)){
            //eq command extracts the infex value in the moment of iteration
           
            cy.log('Element '+name+' is present');
            cy.get($el).should('have.text',name);    
        }
    })
})

Cypress.Commands.add('TotalizeProducts', (total) => {
    const checkoutPage = new CheckoutPage();
    var sum = 0;
    checkoutPage.getTotalsColumn().each(($el, index, $list)=>{
        var res = $el.text();
        res = res.split(" "); //spliting the string values on $el in an array
        res = parseInt(res[1].trim()); //parsing into numeric and removing blank spaces from it.
       // res = parseInt(res);
        sum=sum+res;
        if (index>=1){
            cy.wrap(sum).as('result');
        }       
}
)
})



//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
