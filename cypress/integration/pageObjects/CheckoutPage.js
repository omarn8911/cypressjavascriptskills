class CheckoutPage
{

    getTotalLabel()
    {
        return cy.get(":nth-child(4)>h3");
    }

    getCheckOutBtn()
    {
        return cy.get("button.btn.btn-success");
    }

    getCountryTextBox()
    {
        return cy.get("#country");
    }

    getAgreeCheckBox()
    {
        return cy.get("#checkbox2[type='checkbox']");
    }

    getSubmitButton()
    {
        return cy.get("input[type='submit']");
    }

    getSuccessAlert()
    {
        return cy.get(".alert");
    }

    getTotalsColumn()
    {
        return cy.get('tr td:nth-child(4) strong');
    }
}

export default CheckoutPage;