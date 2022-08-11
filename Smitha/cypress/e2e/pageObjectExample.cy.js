import LoginPage from './pageobject/loginPage'
describe("Contact",()=>{
    it("CreateContactWithOrganization",()=>{
        const lg=new LoginPage()
        lg.launchApplication("http://localhost:8888/")
        lg.fillUsername("admin")
        lg.fillPassword("admin")
        lg.submit()
        cy.contains('Contacts').click()
        cy.get(':nth-child(1) > table > tbody > tr > [style="padding-right:0px;padding-left:10px;"] > a > img').click()
        cy.get(':nth-child(4) > :nth-child(2) > .detailedViewTextBox').type("Adaam")
        cy.get(':nth-child(1) > td > div > .save').click()
        cy.get('[src="themes/softed/images/user.PNG"]').trigger('mouseover')
        cy.contains('Sign Out').click() 
    })
})