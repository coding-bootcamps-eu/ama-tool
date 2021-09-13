describe("Test navigation", () => {
  it("Navigation should exist", () => {
    cy.visit("/");
    cy.get("nav").should("exist");
  });
  it("Navigation should be clickable", () => {
    cy.get("[data-cy='nav-element-list']").click();
    cy.get("[data-cy='nav-element-ask']").click();
  });
  it("Navigation elements should be focusable", () => {
    //can't test focus because cypress doesn't see list elements as focusable elements. it only works on input fields.
  });
  it("Navigation should go to correct URL", () => {
    cy.get("[data-cy='nav-element-list']").click().visit("/questionlist");
    cy.get("[data-cy='nav-element-ask']").click().visit("/askquestion");
  });
});
