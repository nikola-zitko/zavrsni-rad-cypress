
describe('As a student, check grade given for Zavrsni rad', () => {
  it('checks if grade for Zavrsni rad is 5', () => {
    cy.loginAsStudent();

    cy.get('a').contains('Ocjene').click({ force: true });
    cy.get('a').contains('ZAVRŠNI RAD').click();

    // this test is supposed to fail until it gets inserted after successfully completing the thesis.
    cy.get('td').should('have.class', 'column-grade').contains('5');
  })
})