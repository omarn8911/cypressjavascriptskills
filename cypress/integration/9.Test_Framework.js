/// <reference  types="Cypress" />
//importing cypress iframe
/// <reference types="cypress-iframe" />
import 'cypress-iframe';
//importing Page Object Designs
import Homepage from '../integration/pageObjects/HomePage'
import ProductPage from '../integration/pageObjects/ProductPage'
import CheckoutPage from '../integration/pageObjects/CheckoutPage'

describe ('My first test case suite', function()
{

    before(function(){
        //runs once before all test in the block
        cy.fixture('example').then(function(data)
        {
            //using this.data allow us to use the instanciated "data" object outside of this function
            this.data=data;
        })
    })
    it ('Handling Frames', function()
    {

        //Need to instanciate the HomePage class in an object to call its methods
        const homePage = new Homepage();
        const productPage = new ProductPage();
        const checkoutPage = new CheckoutPage();

        cy.visit('/angularpractice/');

        //invoking homePage class methods instead of using hardcoded get command.
        homePage.getEditBox().type(this.data.name);
        homePage.getGender().select(this.data.gender);
        homePage.getTwoWayDataBinding().should('have.value',this.data.name);
        //with the have.attr assertion we can shot to a property=attribute of the html element
        homePage.getEditBox().should('have.attr','minlength','2');
        homePage.getEntrepreneur().should('be.disabled');       
        homePage.getShopTab().click();

        this.data.productName.forEach(function(element){
            cy.SelectProduct(element);
        });
        //cy.SelecProduct('iphone X');  --> not using hardcoded product anymore thanks of this above

        //Going to checkout and making assertions we effectively added the products.
        productPage.getCheckOutButton().click();
        checkoutPage.getTotalLabel().should('have.text','Total');

        
        var total = 150000;
        cy.TotalizeProducts();
        //used aliasing to return the @result = sum value
        cy.get('@result').then(sum =>{
            //used Mocha assertion below
            expect(sum).to.equal(total);
        })
        


        //let's validate we have the correct products in the car

        this.data.productName.forEach(function(element)
        {
           cy.VerifyProduct(element);
        })

        //checking out
        checkoutPage.getCheckOutBtn().click();
        checkoutPage.getCountryTextBox().type('Colombia');
        checkoutPage.getAgreeCheckBox().click({force: true});
        checkoutPage.getSubmitButton().click();
        checkoutPage.getSuccessAlert().should("contain.text","Success! Thank you! Your order will be delivered in next few weeks :-).");

       //another solution to make the assertion below is to resolve the promisse using Jquery and Chai assertion

       checkoutPage.getSuccessAlert().then(function(element)
       {
            const actualText=element.text();
            expect(actualText.includes("Success")).to.be.true; //used chai assertion here!
       })

    }
)}
)