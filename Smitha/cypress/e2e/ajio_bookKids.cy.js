describe("Ajio",()=>{
    it("bookKids",()=>{
        cy.visit("https://www.ajio.com/")
        cy.title().should("include","Ajio")
        
    })
})