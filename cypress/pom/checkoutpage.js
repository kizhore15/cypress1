export class Checkout{
    constructor(){
        this.firstName = "#first-name"
        this.lastNmae = '#last-name'
        this.zipcode = '#postal-code'
        this.continueBtn = ".cart_button"
    }
    visitingCheckOutPage(){
        cy.visit('//checkout-step-one.html')
    }
    enterFirstName(userFirstName){
        cy.get(this.firstName).type(userFirstName)
    }
    enterLastName(userLastName){
        cy.get(this.lastNmae).type(userLastName)
    }
    enterPostalCode(userZipCode){
        cy.get(this.zipcode).type(userZipCode)
    }
    clickContinueButton(){
        cy.get(this.continueBtn).click()
    }
}