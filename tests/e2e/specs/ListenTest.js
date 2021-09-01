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
    cy.get("[data-cy='input-radio-alle-fragen']").focus().should("have.focus");
    cy.get("[data-cy='input-radio-offene-fragen']")
      .focus()
      .should("have.focus");
    cy.get("[data-cy='input-radio-beantwortete-fragen']")
      .focus()
      .should("have.focus");
    //eq() is used because it can be transferred to all buttons
    cy.get("[data-cy='answer-button']").eq(0).focus().should("have.focus");
  });

  it("Buttons should be clickable", () => {
    cy.get("[data-cy='answer-button']").contains("BEANTWORTEN").click();
    cy.get("[data-cy='answer-button']").contains("ZURÜCKZIEHEN").click();
  });

  it("Testing the Filters and Buttons", () => {
    cy.get("[data-cy='input-radio-alle-fragen']").click();
    cy.get("[data-cy='input-radio-offene-fragen']").click();
    cy.get("[data-cy='input-radio-beantwortete-fragen']").click();
    //need to go back to all questions to test voting
    cy.get("[data-cy='input-radio-alle-fragen']").click();
  });

  it("Testing the upvotes", () => {
    //Downvotes can't be tested because they don't appear in testing
    cy.get("[data-cy='vote-arrow']").click({ multiple: true });
  });
});
