it("let me debug like a fiend", () => {
  cy.visit("/my/page/path");

  cy.get(".selector-in-question").debug();
});

it("adds items", () => {
  cy.pause();
  cy.get(".new-todo");
  // more commands
});
