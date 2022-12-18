describe('import.meta.env contains PACKAGE_VERSION', () => {
  it('package version showing during development', () => {
    cy.visit('http://localhost:3000');
    cy.get('#package_version').should('have.text', '1.0.0');
  });

  it('package version showing in production', () => {
    cy.visit('http://localhost:3001');
    cy.get('#package_version').should('have.text', '1.0.0');
  });
});
