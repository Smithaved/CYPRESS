describe("Contact",()=>{
    it("CreateContactWithOrganization",()=>{
        cy.visit("http://localhost:8888/")
        cy.login("admin","admin")
        cy.contains('Contacts').click()
        cy.get(':nth-child(1) > table > tbody > tr > [style="padding-right:0px;padding-left:10px;"] > a > img').click()
        cy.get(':nth-child(4) > :nth-child(2) > .detailedViewTextBox').type("Adaam")
        cy.get(':nth-child(1) > td > div > .save').click()
        cy.get('[src="themes/softed/images/user.PNG"]').trigger('mouseover')
        cy.contains('Sign Out').click() 
    })
})