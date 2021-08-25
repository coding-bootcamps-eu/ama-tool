describe("Test Fragen liste exist", () => {
  it("Fragen liste should exist", () => {
    cy.visit("/questionlist");
    cy.url().should("exist").should("include", "/questionlis");
  });

  it("Test Check the focus", () => {
    cy.get("[data-cy='input-radio']").eq(0).focus();
    cy.get("[data-cy='input-radio']").eq(1).focus();
    cy.get("[data-cy='input-radio']").eq(2).focus();

    cy.get("[data-cy='answer-btw']").eq(0).focus();
    cy.get("[data-cy='answer-btw']").eq(1).focus();
    cy.get("[data-cy='answer-btw']").eq(2).focus();
  });

  it("Test Check the answers", () => {
    /* we wait of the firebase */
  });

  it("Test Check the Filter and Buttons", () => {
    cy.get("[data-cy='answer-btw']").eq(1).contains("Beantworten").click();
    cy.get("[data-cy='withdraw-btw']").contains("Zurückziehen");
    cy.get("[data-cy='single-filter-wrapper']").click({ multiple: true });
  });

  it("Test Check the up and downvotes", () => {
    cy.get("[data-cy='single-filter-wrapper']").eq(0).click();
    cy.get("[data-cy='vote-button-up']").eq(0).click();
  });
});
