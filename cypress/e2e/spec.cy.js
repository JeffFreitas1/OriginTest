const { it } = require("mocha");

describe('Origin Savings Simulation Tests', () => {
  it('Should simulate the current month savings', () => {
    
    cy.visit('http://qa-assignment.useorigin.com.s3-website-us-east-1.amazonaws.com/');
    cy.get('[data-testid="inputContainer"]').type('1,000.00');
    cy.get('[class="sc-hKwDye iYoBgQ"]').should('be.visible').and('contain','You’re planning 1 monthly deposits to reach your $1,000.00 goal by April 2023.');  
  })

  it('Should simulate two months savings', () => {
    cy.visit('http://qa-assignment.useorigin.com.s3-website-us-east-1.amazonaws.com/');
    cy.get('[data-testid="inputContainer"]').type('1,000.00');
    cy.get('[direction="right"]').should('be.visible').click();
    cy.get('[class="sc-hKwDye iYoBgQ"]').contains,(/You’re planning 2 monthly deposits/);  
  });

  it('Should simulate a year of savings', () => {
    cy.visit('http://qa-assignment.useorigin.com.s3-website-us-east-1.amazonaws.com/');
    cy.get('[data-testid="inputContainer"]').type('1,000.00');
    for(let n = 0; n < 11; n ++){
      cy.get('[direction="right"]').click();
    }
    cy.get('[direction="right"]').should('be.visible').click();
    cy.get('[class="sc-hKwDye iYoBgQ"]').contains,(/You’re planning 12 monthly deposits/);  
  });


  it('Should not calculate the savings', () => {
    cy.visit('http://qa-assignment.useorigin.com.s3-website-us-east-1.amazonaws.com/');
    cy.get('[data-testid="inputContainer"]').type('1000000000000000000000');
    cy.get('[class="sc-jrQzAO ehcBZo"]').contains,(0);
    cy.get('[class="sc-hKwDye iYoBgQ"]').should('be.visible').and('contain','You’re planning 1 monthly deposits to reach your $0 goal by April 2023.');     
  });


  
});

