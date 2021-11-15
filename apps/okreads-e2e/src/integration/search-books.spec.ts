describe('When: Use the search feature', () => {
  before(() => {
    cy.startAt('/');
  });

  it('Then: I should be able to search books by title', () => {
    cy.get('input[type="search"]').type('javascript');

    cy.get('form').submit();

    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
  });

  // it('Then: I should see search results as I am typing', () => {
  //   // TODO: Implement this test!
  // });
});
