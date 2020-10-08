describe("test our form inputs", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/");
  });
  it("add text & submit form", () => {
    cy.get("[data-cy=name]").type("Ismail").should("have.value", "Ismail");
    cy.get("[data-cy=email]")
      .type("ismail@nawatt.com")
      .should("have.value", "ismail@nawatt.com");
    cy.get("[data-cy=motivation]")
      .type("I love volunteer work.")
      .should("have.value", "I love volunteer work.");
    cy.screenshot("my-screenshot");
    cy.get("[data-cy=positions]")
      .select("Administrative Work")
      .should("have.value", "Administrative Work");
    cy.get("[data-cy=terms]").check().should("be.checked");
    cy.get("[data-cy=submit]").should("not.be.disabled").click();
  });
});
