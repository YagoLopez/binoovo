
const searchTerm1 = 'contact'
const searchTerm2 = 'laskdjfask fla'

describe('Test index page', () => {
  it('Should load root path without errors', () => {
    cy.visit('http://localhost:4000')
  })
})

describe('Test search functionality', () => {

  it('Should return results for '+ searchTerm1 +' search string', () => {
    cy.visit('http://localhost:4000')
    cy.get('input.mdc-text-field__input').type(searchTerm1)
    cy.get('button[type="submit"]').click()
    cy.get('ul.mdc-list')
  })

  it('Should not return results for '+ searchTerm2 +' search string', () => {
    cy.visit('http://localhost:4000')
    cy.get('input.mdc-text-field__input').type(searchTerm2)
    cy.get('button[type="submit"]').click()
    cy.get('[data-cy=no-results-msg]')
  })

})

describe('Test pagination', () => {

  it('Should return 7 pages for search term:' + searchTerm1, () => {
    cy.visit('http://localhost:4000/movies-search/'+ searchTerm1 +'?page=1')
    cy.get('[data-cy=total-pages]').should('have.text', 'Total pages: 7')
  })

  it('Should be disabled previous button for first page', () => {
    cy.visit('http://localhost:4000/movies-search/'+ searchTerm1 +'?page=1')
    cy.get('[data-cy=prev-btn]').should('not.exist')
  })

  it('Should be disabled next button for last page', () => {
    cy.visit('http://localhost:4000/movies-search/rambo?page=2')
    cy.get('[data-cy=next-btn]').should('not.exist')
  })

  it('Should return no results for page out of range and not break', () => {
    cy.visit('http://localhost:4000/movies-search/'+ searchTerm1 +'?page=100')
    cy.get('[data-cy=no-results-msg]')
  })

})