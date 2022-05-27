/// <reference types="cypress" />

describe ('My first Test Suite', function()
{
    it('My first Test Case',function()
    {
        cy.visit("/seleniumPractise/#/");
        cy.get('.search-keyword').type("ca");
        cy.wait(2000); //waiting to give the browser time to load the elements before assert
        cy.get('.product:visible').should('have.length',4); //asserting 4 product class (ONLY VISIVLE) items are listed. -- tnts 

        //Parent child chaining --used here to focus only in the items inside of the parent, avoiding invisible elements
        cy.get('.products').find('.product').should('have.length',4); 
        cy.get(':nth-child(1) > .product-action > button').click(); //this access the ADD to cart button with the direct CSS, but it could be unstable
        
        //instead of start repeating .products everytime, let's alias it:
        cy.get('.products').as('productLocator');
        //and then we use it as a variable
        cy.get('@productLocator').find('.product').eq(0).contains('ADD TO CART').click(); //this a little bit more stable, but not 100%
        //maybe I don't see the difference yet, but I can bet it will be useful for long locator css paths.

        //using each method to iterate into the listed products array and find the wanted product, with its name and not depending of the index that may change.
        cy.get('.products').find('.product').each(($el, index, $list) =>{

            const textVeg = $el.find('h4.product-name').text();
            if (textVeg.includes('Cashews'))
            {
                $el.find('button').click();
            }
        })

        //The next is to print in Devtools console log:
        //If I want to store a promise (result) into a variable, I have to manually handle it, cause Cypress is asynchronous:
        cy.get('.brand').then(function(logoelement) //logoelement is the variable
        {
            cy.log(logoelement.text()); //cy.log shows the log in the cypress console instead of the DevTools console.
        })
        //We did this above instead of simply storing the result of the get and text methods to avoid error!
        //even if we don't save it in a variable wont't work to bring directly .text because is not a Cypress comand.

        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART');
        
        //let's check the cart

        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();

        //let's place the order
        cy.contains('Place Order').click();
        cy.get('select').select('Colombia');
        cy.get('.chkAgree').check();
        //let's confirm the order
        cy.contains('Proceed').click();
   
        //let's validate the purchase was successful
        cy.wait(7000) //meanwhile we're redirected to the home page
        cy.url().should('contain', '/seleniumPractise/#/');
        cy.get(':nth-child(1) > :nth-child(3) > strong').should('have.text','0');
        cy.get(':nth-child(2) > :nth-child(3) > strong').should('have.text','0');
})

})
 
 