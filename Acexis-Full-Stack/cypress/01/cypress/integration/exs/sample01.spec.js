describe("My Second test", () => {
  it("Contains", () => {
    cy.visit("/");

    /*cy.contains("Main");

    cy.get(".main").contains("Main");

    // Give this element 1 seconds to appear
    //or set defaultCommandTimeout
    //the default is 4s
    cy.get(".main", { timeout: 1000 }).then(($element) => {
      console.log($element);
    });

    cy.get(".main").then(($element) => {
      console.log($element);
    });

    cy.get(".main-fake").then(($element) => {
      console.log("After 10s finish finding element");
    });

    //chaining in actions
    // .focus(), .dbClick() https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Interacting-With-Elements
    cy.get("textarea.post-body").type("This is an excellent post.");

    //asserting
    cy.get(":checkbox").should("be.disabled");

    cy.get("form").should("have.class", "form-horizontal");

    cy.get("input").should("not.have.value", "US");

    //subject management
    cy.clearCookies(); // Done: 'null' was yielded, no chaining possible

    cy.get(".main-container") // Yields an array of matching DOM elements
      .contains("Headlines") // Yields the first DOM element containing content
      .click(); // Yields same DOM element from previous command
    */

    cy.get(".main")
      .then((ele) => {
        const idElement = ele.prop("id");
        idElement.replace(/1/, "11");
        return idElement;
      })
      .then((id) => {
        cy.get("#11").contains("Content");
      });

    /*cy.get(".my-selector")
      .as("myElement") // sets the alias
      .click();
    cy.get("@myElement") // re-queries the DOM as before (only if necessary)
      .click();
    */
  });
});
