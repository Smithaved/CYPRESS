describe("Contact",()=>{
    let username,password
    before(function () {
        cy.parseXlsx('E:/Smitha/cypress/fixtures/testdata/testData.xlsx').then((jsondata)=>{
            username=jsondata[0].data[1][0]
            password=jsondata[0].data[1][1]  
        })      
    })
    it("CreateContactWithOrganization",function(){

        cy.visit("http://localhost:8888/")
        cy.get('.inputs > :nth-child(2) > input').type(username)
        cy.get(':nth-child(5) > input').type(password)
        cy.get('#submitButton').click()
        cy.contains('Contacts').click()
        cy.get(':nth-child(1) > table > tbody > tr > [style="padding-right:0px;padding-left:10px;"] > a > img').click()
        cy.get(':nth-child(4) > :nth-child(2) > .detailedViewTextBox').type("Adaam")
        cy.get(':nth-child(1) > td > div > .save').click()
        cy.get('[src="themes/softed/images/user.PNG"]').trigger('mouseover')
        cy.contains('Sign Out').click() 
    })
})