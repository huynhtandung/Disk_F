describe('api', () => {
    Cypress.config('baseUrl', 'http://dummy.restapiexample.com/api/v1')
    it('api', () => {
        cy.request({
            method: "POST",
            url: "/create",
            headers: {},
            body:{
                "name":"test",
                "salary":"123",
                "age":"23"
            }
        }).then(res => {
            expect(res).to.have.property('status', 200)
            
        }).its('body').its('data').should('include', {
            "name":"test",
        })
    })
})