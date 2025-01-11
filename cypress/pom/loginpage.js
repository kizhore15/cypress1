export class LoginPage{
  constructor(){
    this.userName = "#user-name"
    this.userPassword = '#password'
    this.submitbtn = '#login-button'
  }
  enterUserName(userN){
    cy.get(this.userName).type(userN)
  }
  enterUserPassword(userP){
    cy.get(this.userPassword).type(userP)
  }
  clickSubmitButton(){
    cy.get(this.submitbtn).click()
  }
}