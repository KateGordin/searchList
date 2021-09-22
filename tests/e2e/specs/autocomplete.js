describe('Autocomplete', () => {
  it('renders tabs and empty lists', () => {
    cy.visit('/')
    cy.get('[data-testid="tabs"]').should('be.visible')
    cy.get('[data-testid="filter-list"]').should('be.visible')
    cy.get('[data-testid="empty-filter-list"]').should('be.visible')

    cy.get('[data-testid="city-filter-item"]').should('have.length', 0)
    cy.get('[data-testid="book-filter-item"]').should('have.length', 0)
  })

  it('uses search strings from URL', () => {
    cy.visit('/?citiesKey=san&booksKey=don')
    cy.get('[data-testid="cities-input"]').should('have.value', 'san')
    cy.get('[data-testid="books-input"]').should('have.value', 'don')

    cy.get('[data-testid="city-filter-item"]').should('have.length', 6)
    cy.get('[data-testid="book-filter-item"]').should('have.length', 1)
  })
})
