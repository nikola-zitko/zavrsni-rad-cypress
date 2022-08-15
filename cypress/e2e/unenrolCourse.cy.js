
describe('As a student, unenrol a course', () => {
  it('unenrols a course', () => {
    cy.loginAsStudent();
    cy.enrolCourse();

    cy.get('a').contains('Ispiši me iz e-kolegija').click();
    cy.get('input').contains('Nastavi').click();

    
    cy.url().should('eq', 'https://moodle.oss.unist.hr/index.php');
    cy.get('.coursebox').contains('UVOD U PROGRAMIRANJE').should('not.exist');
  })
})