// https://docs.cypress.io/api/introduction/api.html

describe("Test navigation", () => {
  it("Navigation should exist", () => {
    cy.visit("/");
    cy.get("nav").should("exist");
  });
  it("Navigation should be clickable", () => {
    cy.get("[data-cy='nav-elements']").click({ multiple: true });
  });
  it("Navigation elements should be focusable", () => {
    /* need to find out */
  });
  it("Navigation should go to correct URL", () => {
    cy.visit("/");
    cy.visit("/questionlist");
    cy.visit("/askquestion");
    cy.visit("/team");
  });
});
