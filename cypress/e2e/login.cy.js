
describe('login into Moodle', () => {
  it('login', () => {
    cy.visit('https://moodle.oss.unist.hr/');

    cy.get('#login_username').type(Cypress.env('studentEmail'));
    cy.get('#login_password').type(Cypress.env('studentPassword'), { log: false });

    cy.get('input').contains('Prijava').click();

    cy.get('.logininfo').contains('Prijavljeni ste kao');
  })
})