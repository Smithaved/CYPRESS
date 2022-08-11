class LoginPage{
    launchApplication(url)
    {
        cy.visit(url)
    }
    fillUsername(username)
    {
        const usernamefield = cy.get('[name="user_name"]')
        usernamefield.type(username)
        return this
    }
    fillPassword(password)
    {
        const passwordfield = cy.get('[name="user_password"]')
        passwordfield.type(password)
        return this
    }
    submit()
    {
        const submit=cy.get('[id=submitButton]')
        submit.click()
        return this
    }
}
export default LoginPage