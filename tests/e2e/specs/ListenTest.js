describe("Testing the range Fragen List", () => {
  it("Database connection should exist", () => {
    cy.visit("http://localhost:8080/");
    cy.url().should("exist");
  });
  it("exists the area Fragen List", () => {
    cy.visit("http://localhost:8080/questionlist");
    cy.url().should("exist").should("include", "/questionlist");
  });

  it("Focus is aktiv", () => {
    cy.get("[data-cy='input-radio-alle-fragen']").focus().should("have.focus");
    cy.get("[data-cy='input-radio-offene-fragen']")
      .focus()
      .should("have.focus");
    cy.get("[data-cy='input-radio-beantwortete-fragen']")
      .focus()
      .should("have.focus");

    cy.get("[data-cy='answer-button']").eq(0).focus().should("have.focus");
  });

  it("Testing the Filter and Buttons", () => {
    cy.get("[data-cy='answer-button']").contains("BEANTWORTEN").click();
    cy.get("[data-cy='answer-button']").contains("ZURÜCKZIEHEN");
    cy.get("[data-cy='input-radio-alle-fragen']").click();
    cy.get("[data-cy='input-radio-offene-fragen']").click();
    cy.get("[data-cy='input-radio-beantwortete-fragen']").click();
    cy.get("[data-cy='input-radio-alle-fragen']").click();
  });

  it("Upvotes Testing", () => {
    cy.get("[data-cy='vote-button-up']").eq(2).click();
  });
});
