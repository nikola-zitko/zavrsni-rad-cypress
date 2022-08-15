// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('loginAsStudent', () => { 
    cy.visit('https://moodle.oss.unist.hr/');
    cy.get('#login_username').type(Cypress.env('studentEmail'));
    cy.get('#login_password').type(Cypress.env('studentPassword'), { log: false });
    cy.get('input').contains('Prijava').click(); 
});



Cypress.Commands.add('enrolCourse', () => { 
    cy.get('.footer').contains('Svi e-kolegiji').click();
    cy.get('.categoryname').contains('Preddiplomski stručni studiji').click();
    cy.get('.categoryname').contains('Računarstvo (IT)').click();
    cy.get('.coursename').contains('SRC103 UVOD U PROGRAMIRANJE').click();
    cy.get('#id_submitbutton').click();
});
