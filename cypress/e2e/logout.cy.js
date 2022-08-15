
describe('logout from Moodle', () => {
  it('logout', () => {
    cy.loginAsStudent();

    cy.get('.logininfo').contains('Odjava').click();

    cy.get('.login').contains('Niste prijavljeni u sustav.');
  })
})