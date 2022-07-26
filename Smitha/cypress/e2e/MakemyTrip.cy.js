describe("Clinique",()=>{
    it("clinique",()=>{
        cy.visit("https://www.spicejet.com/")
        // cy.get()
        cy.viewport(1024, 768)
        cy.wait(3000)
        cy.get('.r-zso239 > [data-testid="svg-img"] > circle').click()
        // cy.get('[data-testid="search-destination-city-txt"]').click()
        // cy.get('[data-testid="auto-cmp-txt"]').type("Delhi")
    })
})