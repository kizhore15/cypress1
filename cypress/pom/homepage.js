export class HomePage{
    constructor(){
        this.cartButton = '.fa-fw'
        this.checkOutButton = '.checkout_button'
    }
    visitingHomePage(){
        // cy.visit('https://www.saucedemo.com/v1/inventory.html')
        cy.visit('/inventory.html')
    }
    addingProductsToTheCart(productAdd){
        productAdd.forEach((inv)=>{
            cy.addingProductToCart(inv)
        })
    }
    clickCartButton(){
        cy.get(this.cartButton).click()
    }
    clickCheckOutButton(){
        cy.get(this.checkOutButton).click()
    }
}