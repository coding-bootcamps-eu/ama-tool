describe("Test navigation", () => {
  it("Navigation should exist", () => {
    cy.visit("http://localhost:8080/");
    cy.get("nav").should("exist");
  });
  it("Navigation should be clickable", () => {
    cy.get("[data-cy='nav-element-start']").click();
    cy.get("[data-cy='nav-element-list']").click();
    cy.get("[data-cy='nav-element-ask']").click();
    cy.get("[data-cy='nav-element-team']").click();
  });
  /*
  it("Navigation elements should be focusable", () => {
    //can't test focus because cypress doesn't see list elements as focusable elements. it only works on input fields.
  });*/
  it("Navigation should go to correct URL", () => {
    cy.visit("http://localhost:8080");
    cy.get("[data-cy='nav-element-list']").click().visit("/questionlist");
    cy.get("[data-cy='nav-element-ask']").click().visit("/askquestion");
    cy.get("[data-cy='nav-element-team']").click().visit("/team");
  });
});
