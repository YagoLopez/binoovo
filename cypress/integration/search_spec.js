
describe('Test index page', () => {
  it('Should load root path without errors', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('Test search', () => {
  it('Should return results for "contact" search string', () => {
    cy.visit('http://localhost:3000')
    cy.get('input.mdc-text-field__input').type('contact')
    cy.get('button[type="submit"]').click()
  })

  it('Should not return results for "laskdjfask fla" search string', () => {
    cy.visit('http://localhost:3000')
    cy.get('input.mdc-text-field__input').type('laskdjfask fla')
    cy.get('button[type="submit"]').click()
  })
})