class HomePage
{

    getEditBox()
    {
        return cy.get('input[name="name"]:nth-child(2)');
    }

    getTwoWayDataBinding()
    {
        return cy.get(':nth-child(4) > .ng-pristine');
    }

    getGender()
    {
        return cy.get('#exampleFormControlSelect1');
    }

    getEntrepreneur()
    {
        return cy.get('#inlineRadio3');
    }

    getShopTab()
    {
        return cy.get("a.nav-link[href='/angularpractice/shop']");
    }
}

export default HomePage;