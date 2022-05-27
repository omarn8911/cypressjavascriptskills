class ProductPage
{

    getCheckOutButton()
    {
        return cy.get("a[class='nav-link btn btn-primary']");
    }

    getProductsArray()
    {
        return cy.get("app-card");
    }

    getAddProductButton()
    {
        return cy.get('button.btn.btn-info');
    }


}

export default ProductPage;