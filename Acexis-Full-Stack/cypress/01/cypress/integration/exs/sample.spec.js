describe("My First Test", () => {
  /*it("Visits the Kitchen Sink", () => {
		cy.visit("https://example.cypress.io");
		cy.pause()
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
	});*/
	
	it("Visit my app", () => {
		cy.visit("/")

		cy.contains('Cypress')

		/*cy.get('./cypress').then($myELement => {
			//
		})*/
	})
});
