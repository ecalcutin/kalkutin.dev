describe("Static assert", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("displays my name", () => {
    cy.get("h1").should("have.text", "Hi, my name is");
    cy.get("h2.big-heading").should("have.text", "Evgenii Kalkutin.");
  });

  it("display social icons", () => {
    cy.get("[orientation=left]").should("have.length", 1);
  });
});
