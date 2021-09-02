describe("Testing the range Fragen List", () => {
  it("Database connection should exist", () => {
    cy.visit("http://localhost:8080/");
    cy.url().should("exist");
  });
  it("exists the area Questions list", () => {
    cy.visit("http://localhost:8080/questionlist");
    cy.url().should("exist").should("include", "/questionlist");
  });

  it("List element and associated elements should exist", () => {
    cy.get("[data-cy='list-element']").should("exist");
    cy.get("[data-cy='list-element']").children().should("exist");
  });

  it("Radiobuttons should be focusable", () => {
    cy.get("[data-cy='input-radio-all']").focus().should("have.focus");
    cy.get("[data-cy='input-radio-open']").focus().should("have.focus");
    cy.get("[data-cy='input-radio-closed']").focus().should("have.focus");
    //eq() is used because it can be transferred to all buttons
    cy.get("[data-cy='answer-button']").eq(0).focus().should("have.focus");
  });

  it("Buttons should be clickable", () => {
    cy.get("[data-cy='answer-button']").contains("BEANTWORTEN").click();
    cy.get("[data-cy='answer-button']").contains("ZURÜCKZIEHEN").click();
  });

  it("Testing the Filters", () => {
    cy.get("[data-cy='input-radio-all']").click();
    cy.get("[data-cy='input-radio-open']").click();
    cy.get("[data-cy='input-radio-closed']").click();
    //need to go back to all questions to test voting
    cy.get("[data-cy='input-radio-all']").click();
  });
});
