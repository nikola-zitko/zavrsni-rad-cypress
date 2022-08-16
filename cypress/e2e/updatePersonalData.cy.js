
describe('As a student, update personal data on Moodle', () => {
    it('updates students data', () => {
      cy.loginAsStudent();

      cy.get('a').contains('Postavke').click({ force: true });
      cy.get('a').contains('Promijeni osobne podatke').click();
      cy.get('a').contains('Opcionalno').click();

      cy.get('#id_url').type('{selectall}https://cypress.io');
      cy.get('#id_phone2').type('{selectall}555-5555');
      cy.get('#id_address').type('{selectall}Adresa 1a, Split');

      cy.get('input').contains('Promijeni osobne podatke').click();

      cy.get('a').contains('Promijeni osobne podatke').click();
      cy.get('a').contains('Opcionalno').click();


      cy.get('#id_url').should('have.value', 'https://cypress.io');
      cy.get('#id_phone2').should('have.value', '555-5555');
      cy.get('#id_address').should('have.value', 'Adresa 1a, Split');
    })
  })