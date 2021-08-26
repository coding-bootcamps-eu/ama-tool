describe("Test navigation", () => {
  it("Ask-question side should exist", () => {
    cy.visit("/askquestion");
    cy.url().should("exist").should("include", "/askquestion");
  });
  it("Input forms should be focusable", () => {
    cy.get("[data-cy='input-text-title']").focus();
    cy.get("[data-cy='input-text-description']").focus();
  });
  //tests some input cases to make sure it's possible to format the text.
  it("All input fields should accept text when clicked on", () => {
    cy.get("[data-cy='input-text-title']")
      .click()
      .type("Test typing in question title..{backspace}");
    cy.get("[data-cy='input-text-description']")
      .click()
      .type(
        "# Test typing in question description..{backspace}{enter}{enter}*Hello World!*{enter}Test text."
      );
  });
  it("Input text should only have their maximum length", () => {
    cy.get("[data-cy='input-text-title']").its("length").should("be.lte", 150);
    cy.get("[data-cy='input-text-description']")
      .its("length")
      .should("be.lte", 5000);
  });
  it("Radiobuttons should be clickable", () => {
    cy.get("[data-cy='input-radio']").click({ multiple: true });
  });
  it("Preview button should be clickable and get toggled", () => {
    cy.get("[data-cy='preview-button']")
      .contains("einblenden")
      .click()
      .contains("ausblenden");
  });
  it("Preview button should be disabled when nothing is typed in description", () => {
    cy.get("[data-cy='input-text-description']").click().clear();
    cy.get("[data-cy='preview-button']").click().contains("einblenden");
  });
});
