describe("Input form", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.only("Focus input on load", () => {
    // cy.focused().should("have.class", "new-todo");
    cy.get(".new-todo").should("be.focused");
  });

  it("Input form", () => {
    const todo = "Buy milk";
    cy.get(".new-todo").type(todo).should("have.value", todo);
  });

  context("Form submission", () => {
    beforeEach(() => {
      cy.server();
    });

    it("Submit form", () => {
      cy.route("POST", "/api/todos", {
        name: "Sleep",
        id: 1,
        isComplete: false,
      });
      cy.get(".new-todo").type("Sleep").type("{enter}");
    });
  });
});
