describe('When: Use the search feature', () => {
  before(() => {
    cy.startAt('/');
  });
  describe('should be able to search books by title', () => {
  it('Then: I should be able to search books by title', () => {
    cy.get('input[type="search"]').type('javascript');

    cy.get('form').submit();

    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
  });
})
describe('should see search results as I am typing', () => {
  it('Then: I should see search results as I am typing', () => {
    cy.get('input[type="search"]').type('javascript');

    cy.get('form').submit();

    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);  });
});
});
