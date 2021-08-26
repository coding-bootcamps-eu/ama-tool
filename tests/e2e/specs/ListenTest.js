describe("Testing the range Fragen List", () => {
  it("exists the area Fragen List", () => {
    cy.visit("/questionlist");
    cy.url().should("exist").should("include", "/questionlis");
  });

  it("Test Check the answers", () => {
    /* we wait of the firebase */
  });

  it("Testing the Filter and Buttons", () => {
    cy.get("[data-cy='answer-btw']").eq(1).contains("Beantworten").click();
    cy.get("[data-cy='withdraw-btw']").contains("Zurückziehen");
    cy.get("[data-cy='single-filter-wrapper']").click({ multiple: true });
  });

  it("Testing Check the up and downvotes", () => {
    cy.get("[data-cy='single-filter-wrapper']").eq(0).click();
    cy.get("[data-cy='vote-button-up']").eq(0).click();
  });
});
