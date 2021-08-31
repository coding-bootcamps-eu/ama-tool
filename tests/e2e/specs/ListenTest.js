describe("Testing the range Fragen List", () => {
  beforeEach("checkDatabaseConnection", () => {
    cy.intercept(
      "GET",
      "https://ama-tool-ea7e0-default-rtdb.europe-west1.firebasedatabase.app",
      {
        statusCode: 200,
        body: [
          {
            userID: 1,
            questionTitle: "Test Title 1",
            questionDescription: "Test Description 1",
            questionCategory: "HTML",
            author: "",
            created_at: "",
          },
          {
            userID: 0,
            questionTitle: "Test Title 2",
            questionDescription: "Test Description 2",
            questionCategory: "CSS",
            author: "",
            created_at: "",
          },
          {
            userID: 1,
            questionTitle: "Test Title 3",
            questionDescription: "Test Description 3",
            questionCategory: "JavaScript",
            author: "",
            created_at: "",
          },
          {
            userID: 0,
            questionTitle: "Test Title 4",
            questionDescription: "Test Description 4",
            questionCategory: "VUE",
            author: "",
            created_at: "",
          },
          {
            userID: 1,
            questionTitle: "Test Title 5",
            questionDescription: "Test Description 5",
            questionCategory: "Sonstiges",
            author: "",
            created_at: "",
          },
        ],
      }
    );
  });
  it("Database connection should exist", () => {
    cy.visit("/");
    cy.url().should("exist");
  });
  it("exists the area Fragen List", () => {
    cy.visit("/questionlist");
    cy.url().should("exist").should("include", "/questionlis");
  });

  it("Test Check the answers", () => {
    /* we wait of the firebase */
  });

  it("Focus is aktiv", () => {
    cy.get("[data-cy='input-radio-alle-fragen']").focus().should("have.focus");
    cy.get("[data-cy='input-radio-offene-fragen']")
      .focus()
      .should("have.focus");
    cy.get("[data-cy='input-radio-beantwortete-fragen']")
      .focus()
      .should("have.focus");

    cy.get("[data-cy='answer-btw']").eq(0).focus().should("have.focus");
    cy.get("[data-cy='answer-btw']").eq(1).focus().should("have.focus");
    cy.get("[data-cy='answer-btw']").eq(2).focus().should("have.focus");
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
