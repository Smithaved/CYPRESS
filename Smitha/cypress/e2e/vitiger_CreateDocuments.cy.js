describe("Documents",()=>{
    it("CreateDocuments",()=>{
        cy.visit("http://localhost:8888/")
        cy.get('.inputs > :nth-child(2) > input').type("admin")
        cy.get(':nth-child(5) > input').type("admin")
        cy.get('#submitButton').click()
        cy.contains('Documents').click() 
        cy.get(':nth-child(1) > table > tbody > tr > [style="padding-right:0px;padding-left:10px;"] > a > img').click()
        cy.get(':nth-child(3) > :nth-child(2) > .detailedViewTextBox').type("Doc")
        // cy.iframe().find(['#filename_I__']).type("hi")
        cy.get(':nth-child(9) > .detailedViewHeader > b').scrollIntoView()
        cy.get('#filename_I__').selectFile("C:/Users/user/Desktop/interview Questions.docx")
    })
})