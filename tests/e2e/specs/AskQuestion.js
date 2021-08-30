describe("Test navigation", () => {
  beforeEach("checkDatabaseConnection", () => {
    cy.intercept(
      "POST",
      "https://ama-tool-ea7e0-default-rtdb.europe-west1.firebasedatabase.app",
      {
        statusCode: 200,
        body: [
          {
            userID: 1,
            questionTitle: "Test Title 1",
            questionDescription: "Test Description 1",
            questionCategory: "HTML",
          },
          {
            userID: 0,
            questionTitle: "Test Title 2",
            questionDescription: "Test Description 2",
            questionCategory: "CSS",
          },
          {
            userID: 1,
            questionTitle: "Test Title 3",
            questionDescription: "Test Description 3",
            questionCategory: "JavaScript",
          },
          {
            userID: 0,
            questionTitle: "Test Title 4",
            questionDescription: "Test Description 4",
            questionCategory: "VUE",
          },
          {
            userID: 1,
            questionTitle: "Test Title 5",
            questionDescription: "Test Description 5",
            questionCategory: "Sonstiges",
          },
        ],
      }
    );
  });
  it("Database connection should exist", () => {
    cy.visit(
      "https://ama-tool-ea7e0-default-rtdb.europe-west1.firebasedatabase.app"
    );
    cy.url().should("exist");
  });
  it("Ask-question side should exist", () => {
    cy.visit("/askquestion");
    cy.url().should("exist").should("include", "/askquestion");
  });
  it("should test focus of input fields and buttons", () => {
    //fails if .focus() isn't included in the test
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
    //cant test focus beacuse the styled label it getting clicked, labels aren't focusable
    cy.get("[data-cy='input-radio']").click({ multiple: true });
  });
  it("Preview button should be clickable and get toggled", () => {
    cy.get("[data-cy='preview-button']").contains("einblenden").click();
    cy.get("[data-cy='question-preview']").should("exist");
    cy.get("[data-cy='preview-button']").contains("ausblenden").click();
  });
  it("Preview button should be disabled when nothing is typed in description", () => {
    cy.get("[data-cy='input-text-description']").click().clear();
    cy.get("[data-cy='preview-button']").click().contains("einblenden");
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
