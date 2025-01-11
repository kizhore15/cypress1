describe('sample test', () => {
    it('passes', () => {
      cy.visit('https://www.amazon.in/')
      cy.get('#twotabsearchtextbox').type("mobiles")
  
  
  
    })
  })