// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://practicetestautomation.com/practice-test-login/')
//     cy.get('input#username').type('student')
//     cy.get('input#password').type('Password123')
//     cy.get('.btn').click()
//     cy.url().should('include', 'practicetestautomation.com/logged-in-successfully')
//     cy.get('strong').should('be.visible','Congratulations student. You successfully logged in!')
//     cy.get('a[href*="practice-test-login"]').click()
//     cy.get(4000)

//   })

//   it('verify incorrect username',()=>{
//     cy.visit('https://practicetestautomation.com/practice-test-login/')
//     cy.get('input#username').type(' incorrectUser')
//     cy.get('input#password').type('Password123')
//     cy.get('.btn').click()
//     cy.get('div#error').should('be.visible').and('have.text','Your username is invalid!')
//   })
// })


// describe('Practice Test Automation',()=>{
//   let cred;
//   before(()=>{
//     cy.fixture('practiceauto').then((tdata)=>{
//       cred=tdata
//     })
//   })
//   it('validating the login page',()=>{
//     cy.visit('https://practicetestautomation.com/practice-test-login/')
//     // if(cy.get('input#username').type(cred.username) && cy.get('input#password').type(cred.password)){
//     //   cy.get('.btn').click()
//     //   cy.url().should('include',cred.link)
//     //   cy.get('strong').should('be.visible',cred.loginsuccess)
//     //   cy.get('a[href*="practice-test-login"]').click()
//     // }

//     if(cy.get('input#username').type(cred.negativeUserName) && cy.get('input#password').type(cred.password)){
//       cy.get('.btn').click()
//       cy.get('div#error').should('be.visible').and('have.text','Your username is invalid!')
//     }
//     else if(cy.get('input#username').type(cred.username) && cy.get('input#password').type(cred.negativePassword))
//     {
//       cy.get('.btn').click()
//       cy.get('div#error').should('be.visible').and('have.text','Your Password is invalid!') 
//     }
//     else
//       {cy.get('input#username').type(cred.username) && cy.get('input#password').type(cred.password)
//       cy.get('.btn').click()
//       cy.url().should('include',{ timeout:4000}, cred.link)
//       cy.get('strong').should('be.visible', cred.loginsuccess)
//       cy.get('a[href*="practice-test-login"]').click()
//     }
    
//   })
  
// })




//   excel data to json

describe('Read data from Excel file', () => {
  it('should read data from Excel', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')

    cy.task('readExcel', {
      filePath: 'C:/Users/kishore kumar/OneDrive/Desktop/cypress/cypress/fixtures/login.xlsx',  // Update with actual file path
      sheetName: 'loginreg'  // Specify the sheet name
    }).then((data) => {
      cy.log(JSON.stringify(data));
      // expect(data[0].Name).to.equal('John Doe'); // Example validation
      cy.get('input#username').type(data[0].Username)
      cy.get('input#password').type(data[0].Password)
      cy.get('.btn').click()
    });
  });
});
