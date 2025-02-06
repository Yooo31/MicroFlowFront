describe("Homepage", () => {
  it("Should load the homepage", () => {
    cy.visit("/");
    cy.contains("FrontDev").should("be.visible");
  });
});
