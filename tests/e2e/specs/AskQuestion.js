describe("Test navigation", () => {
  it("Ask-question side should exist", () => {
    cy.visit("/askquestion");
    cy.url().should("exist").should("include", "/askquestion");
  });
  it("Input forms should be focusable", () => {
    cy.get("[data-cy='input-text']").first().focus();
    cy.get("[data-cy='input-text']").last().focus();
  });
  //tests some input cases to make sure it's possible to format the text.
  it("All input fields should accept text with their maximum length when clicked on", () => {
    cy.get("[data-cy='input-text']")
      .first()
      .click()
      .type("Test typing in question title..{backspace}");
    //TODO:count the chars, not more than 150
    //   .then((chars) => {
    //     cy.wrap(chars).length <= 150;
    //   });
    cy.get("[data-cy='input-text']")
      .last()
      .click()
      .type(
        "# Test typing in question description..{backspace}{enter}{enter}Hello World!"
      );
    //TODO:count the chars, not more than 5000;
  });
  it("Radiobuttons should be clickable", () => {
    cy.get("[data-cy='input-radio']").click({ multiple: true });
  });
  it("Preview button should be clickable, get toggled and is disabled when nothing is typed in description", () => {
    cy.get("[data-cy='preview-button']").click();
    //TODO:need to test toggling the preview button (wird der text richtig angezeigt)
    //TODO:button does nothing if nothing is typed in description
  });
});
