
describe('As a student, enrol a course', () => {
  it('enrols a new course', () => {
    cy.loginAsStudent();

    cy.get('.footer').contains('Svi e-kolegiji').click();
    cy.get('.categoryname').contains('Preddiplomski stručni studiji').click();
    cy.get('.categoryname').contains('Računarstvo (IT)').click();
    cy.get('.coursename').contains('SRC103 UVOD U PROGRAMIRANJE').click();
    cy.get('#id_submitbutton').click();

    cy.url().should('eq', 'https://moodle.oss.unist.hr/course/view.php?id=105');
  })
})