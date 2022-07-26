describe("Ajio",()=>{
    it("ajio",()=>{
        cy.visit("https://www.ajio.com/")
        cy.title().should('include',"AJIO")
        cy.get("[title='KIDS']").click()
        cy.get("[href='/s/40-to-70-percent-off-4712-57361']").click()
        cy.get('[style="height: 535px; left: 0px; position: absolute; top: 0px; width: 323px;"] > .rilrtl-products-list__link > .preview > .imgHolder > .rilrtl-lazy-img').click()
    })
})