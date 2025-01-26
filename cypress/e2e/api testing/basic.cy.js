describe("http request",()=>{
    it("get method",()=>{
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status').should('equal', 200)
    })

    it("put method",()=>{
        cy.request({
            method:"POST",
            url:"https://jsonplaceholder.typicode.com/posts",
            body:{
                    name: "id labore ex et quam laborum",
                    email: "Eliseo@gardner.biz",
                    body: "laudantium enim quasi est accusantium"
            }

        })
        .its('status').should('equal', 201)
    })
})