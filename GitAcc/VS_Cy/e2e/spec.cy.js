describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.facebook.com/')
    cy.xpath('//input[@type="text"]').type("Jivita")



  })
})