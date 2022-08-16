
describe('As a student, check course Zavrsni rad', () => {
    it('checks if required files are available', () => {
      cy.loginAsStudent();

      cy.get('.coursebox').contains('ZAVRŠNI RAD').click();
      cy.get('a').contains('Postupak odabira mentora i recenzije radova').should('exist');
      cy.get('a').contains('Kalendar aktivnosti').should('exist');
      cy.get('a').contains('Popis tema završnih radova').should('exist');
      cy.get('a').contains('Upute za izradu završnih radova').should('exist');
      cy.get('a').contains('Naslovne stranice (predložak)').should('exist');
      cy.get('a').contains('Popis studenata i mentora završnog rada za 2021/22').should('exist');
    })

    it('checks if notifications are available', () => {
      cy.loginAsStudent();

      cy.get('.coursebox').contains('ZAVRŠNI RAD').click();
      cy.get('a').contains('Obavijesti').click();

      
      cy.url().should('eq', 'https://moodle.oss.unist.hr/mod/forum/view.php?id=189');
      cy.get('a').contains('Ažurirani popis studenata i mentora').should('exist');
      cy.get('a').contains('Popis studenata i mentora').should('exist');
    })
  })