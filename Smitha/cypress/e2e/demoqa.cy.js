describe("DemoQA",()=>{
    it("demoqa",()=>{
        cy.visit("https://demoqa.com/")
        cy.title().should('eq',"ToolsQA")
        cy.get(':nth-child(6) > :nth-child(1) > .card-up').click()
        cy.title().should('eq',"ToolsQA")
        cy.get('#see-book-Git Pocket Guide > a').click()
    })
})