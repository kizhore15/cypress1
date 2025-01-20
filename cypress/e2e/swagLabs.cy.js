describe('Testing Swag Labs',()=>{
    it('Negative User_Name',()=>{
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('#user-name').type('kishore')
        cy.get('input#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })
  })

//     it('Product Oder',()=>{
//         cy.visit('https://www.saucedemo.com/v1/')
//         cy.get('#user-name').type('standard_user')
//         cy.get('input#password').type('secret_sauce')
//         cy.get('#login-button').click()
//         // Adding Product to the Cart
//         cy.contains('.inventory_item_name', 'Sauce Labs Backpack')
//       .parents('.inventory_item') 
//       .find('.btn_primary.btn_inventory') 
//       .click();
//       cy.contains('.inventory_item_name', 'Sauce Labs Bolt T-Shirt')
//       .parents('.inventory_item') 
//       .find('.btn_primary.btn_inventory') 
//       .click();
//     //   cart button
//       cy.get('#shopping_cart_container').click()
//     cy.get('.checkout_button').click();
//     // cy.url().should('include', '/checkout-step-one.html');
//     cy.get('#first-name').type('kishore')
//     cy.get('#last-name').type('kumar')
//     cy.get('#postal-code').type('600110')
//     cy.get('input[value="CONTINUE"]').click()
//     cy.get('.cart_button').click()
//     cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER')

//     });
// })


// describe('sauce lab demo automation',()=>{
//   let cred;
//   before(()=>{
//     cy.fixture('practiceauto').then((tdata)=>{
//       cred = tdata
//     })
//   })
//   beforeEach(()=>{
//     cy.visit('/')
//   })
//   it('validate add product to the functionality',()=>{
//     cy.visit('/inventory.html')
//     cred.products.forEach((inv)=>{
//       cy.addingProductToTheCart(inv)
//     })
//   })
// })


// import { LoginPage } from "../pom/loginpage"
// import { HomePage } from "../pom/homepage";
// import { Checkout } from "../pom/checkoutpage";

// describe('SauceLabs Demo Automation',()=>{
//   let loginPage = new LoginPage;
//   let homePage = new HomePage
//   let checkout = new Checkout

//   let cred;

//   before(()=>{
//     cy.fixture('practiceauto').then((tdata)=>{
//       cred = tdata
//     })
//   })

//   beforeEach(()=>{
//     // failOnStatusCode: false
//     cy.visit('/')
//   })

//   it('Validating Login Page',()=>{
//     // cy.visit('https://www.saucedemo.com/v1/index.html')
//     loginPage.enterUserName(cred.username)
//     loginPage.enterUserPassword(cred.password)
//     loginPage.clickSubmitButton()
//   })

//   it("validating Home Page",()=>{
//     homePage.visitingHomePage()
//     homePage.addingProductsToTheCart(cred.products)
//     homePage.clickCartButton()
//     homePage.clickCheckOutButton()
//   })

//   it("Validating Ceck Out Page",()=>{
//     checkout.visitingCheckOutPage()
//     checkout.enterFirstName(cred.firstName)
//     checkout.enterLastName(cred.lastName)
//     checkout.enterPostalCode(cred.zipCode)
//     checkout.clickContinueButton()
//   })
// })