describe("Test navigation", () => {
  it("Database connection should exist", () => {
    cy.visit("http://localhost:8080/");
    cy.url().should("exist");
  });
  it("Ask-question side should exist", () => {
    //needed to add absolute path to avoid port changes
    cy.visit("http://localhost:8080/askquestion");
    cy.url().should("exist").should("include", "/askquestion");
  });
  it("should test focus of input fields and buttons", () => {
    //fails if .focus() isn't included in the test
    cy.visit("http://localhost:8080/askquestion");
    cy.get("[data-cy='input-text-title']").focus().should("have.focus");
    cy.get("[data-cy='input-text-description']").focus().should("have.focus");
    cy.get("[data-cy='preview-button']").focus().should("have.focus");
    cy.get("[data-cy='send-button']").focus().should("have.focus");
  });
  //tests some input cases to make sure it's possible to format the text.
  //in preparation to test sending question to database, is needed to test the markdown-preview
  it("All input fields should accept text when clicked on", () => {
    cy.get("[data-cy='input-text-title']")
      .click()
      .type("Test typing in question title..{backspace}")
      .should("have.value", "Test typing in question title.");
    cy.get("[data-cy='input-text-description']")
      .click()
      .type(
        "# Test typing in question description..{backspace}{enter}{enter}## Hello World!{enter}Test text."
      ); //can't test value, because {enter} cant be read
  });
  it("Input text should only have their maximum length", () => {
    cy.get("[data-cy='input-text-title']").its("length").should("be.lte", 150);
    cy.get("[data-cy='input-text-description']")
      .its("length")
      .should("be.lte", 5000);
  });
  it("Radiobuttons should be clickable", () => {
    //cant test focus beacuse the styled label it getting clicked, labels aren't focusable
    cy.get("[data-cy='input-radio']").click({ multiple: true });
  });
  it("Preview button should be clickable and get toggled", () => {
    cy.get("[data-cy='preview-button']").contains("EINBLENDEN").click();
    cy.get("[data-cy='question-preview']").should("exist");
    cy.get("[data-cy='preview-button']").contains("AUSBLENDEN").click();
  });
  it("Preview button should be disabled when nothing is typed in description", () => {
    cy.get("[data-cy='input-text-description']").click().clear();
    cy.get("[data-cy='preview-button']").click().contains("EINBLENDEN");
  });
  it("Database should only send when something is typed", () => {
    //fails if nothing is typed
    cy.get("[data-cy='input-text-title']").should("not.have.value", "");
    cy.get("[data-cy='input-text-description']")
      .type("text to pass test")
      .should("not.have.value", "");
    cy.get("[data-cy='send-button']").click();
  });
});
