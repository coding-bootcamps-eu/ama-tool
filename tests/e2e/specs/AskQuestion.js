describe("Test navigation", () => {
  it("Ask-question side should exist", () => {
    cy.visit("/askquestion");
    cy.url().should("exist").should("include", "/askquestion");
  });
  it("Input forms should be focusable", () => {
    cy.get("[data-cy='input-text']").first().focus();
    cy.get("[data-cy='input-text']").last().focus();
    //need to add test for correct focus-color
  });
  //tests some input cases to make sure it's possible to format the text.
  it("All input fields should accept text with their maximum length when clicked on", () => {
    cy.get("[data-cy='input-text']")
      .first()
      .click()
      .type("Test typing in question title..{backspace}");
    cy.get("[data-cy='input-text']")
      .last()
      .click()
      .type(
        "Test typing in question description..{backspace}{enter}Hello World!"
      )
      .clear();
  });
  it("Radiobuttons should be clickable", () => {
    cy.get("[data-cy='input-radio']").first().click();
  });
});
