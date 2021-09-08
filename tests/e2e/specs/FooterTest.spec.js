describe("Test footer", () => {
  it("Footer should exist", () => {
    cy.visit("http://localhost:8080/");
    cy.get("[data-cy='footer-element']").should("exist");
  });
  /*it("Footer should be clickable and lead to external links", () => {
    // test every single element, to check later for correct individual url
    cy.get("[data-cy='footer-element-privacy']")
      .should("include.text", "Datenschutz")
      .click();
    cy.get("[data-cy='footer-element-imprint']")
      .should("include.text", "Impressum")
      .click();
    cy.get("[data-cy='footer-element-apply']")
      .should("include.text", "Bewerben")
      .click();
    cy.get("[data-cy='footer-element-instagram']")
      .should("include.text", "Instagram")
      .click();
    cy.get("[data-cy='footer-element-twitter']")
      .should("include.text", "Twitter")
      .click();
  });*/
  it("Footer 'Team'-element should be clickable an lead to team-url", () => {
    cy.get("[data-cy='footer-element-team']").click();
    cy.url().should("include", "/team");
  });
});
