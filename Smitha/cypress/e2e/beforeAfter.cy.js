describe("Vtiger",()=>{
    beforeEach(function () {
        cy.visit("http://localhost:8888/")
        cy.title().should('include',"vtiger")
        cy.get('.inputs > :nth-child(2) > input').type("admin")
        cy.get(':nth-child(5) > input').type("admin")
        cy.get('#submitButton').click()
        cy.title().should('include',"Home")
    })
    afterEach(function () {
        cy.get('[src="themes/softed/images/user.PNG"]').trigger('mouseover')
        cy.contains('Sign Out').click() 
    })
    it("CreateOrganization",()=>{        
        cy.contains('Organization').click()
        cy.get(':nth-child(1) > table > tbody > tr > [style="padding-right:0px;padding-left:10px;"] > a > img').click()
        cy.get(':nth-child(3) > :nth-child(2) > .detailedViewTextBox').type("TestYantra3")
        cy.get(':nth-child(9) > :nth-child(2) > .small').select("Education")
        cy.get(':nth-child(1) > td > div > .save').click()
    })
    it("CreateContactWithOrganization",()=>{
        cy.contains('Contacts').click()
        cy.get(':nth-child(1) > table > tbody > tr > [style="padding-right:0px;padding-left:10px;"] > a > img').click()
        cy.get(':nth-child(4) > :nth-child(2) > .detailedViewTextBox').type("Adaam")
        cy.get(':nth-child(5) > :nth-child(2) > img').click()
        cy.get(':nth-child(1) > td > div > .save').click()
    })
})