describe("Fixture",()=>{
    before(function () {
        cy.fixture('login').then(function (data) {
            this.data=data
        })
    })
    it("CreateContactWithOrganization",()=>{
        cy.visit("http://localhost:8888/")
        cy.get('.inputs > :nth-child(2) > input').type(this.data.username)
        cy.get(':nth-child(5) > input').type(this.data.password)
        cy.get('#submitButton').click()
        cy.contains('Contacts').click()
        cy.get(':nth-child(1) > table > tbody > tr > [style="padding-right:0px;padding-left:10px;"] > a > img').click()
        cy.get(':nth-child(4) > :nth-child(2) > .detailedViewTextBox').type("Adaam")
        cy.get(':nth-child(5) > :nth-child(2) > img').click()
        cy.get(':nth-child(1) > td > div > .save').click()
        cy.get('[src="themes/softed/images/user.PNG"]').trigger('mouseover')
        cy.contains('Sign Out').click() 
    })
})