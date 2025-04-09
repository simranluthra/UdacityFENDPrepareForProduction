describe('Create Set Form Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/');
  });

  it('should create a new study set on valid input submission', () => {
    cy.get('#cardSetPage', { timeout: 10000 }).should('exist').click();
    cy.get('[data-cy="set_form"]').should('have.class', 'notVisible');
    cy.get('[data-cy="toggle_form"]', { timeout: 10000 }).should('exist').click();
    cy.get('#titleInput').type('New Study Set');
    cy.get('[data-cy="set_form"]').submit();
    cy.get('[data-cy="set_form"]').should('have.class', 'notVisible');
    cy.get('.cardSets').should('contain.text', 'New Study Set');
  });

  it('should show an error when submitting an empty title', () => {
    cy.get('#cardSetPage', { timeout: 10000 }).should('exist').click();
    cy.get('[data-cy="set_form"]').should('have.class', 'notVisible');
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('[data-cy="set_form"]').submit();

    cy.get('.error').should('contain.text', 'TITLE CANNOT BE EMPTY');
    
  });

  afterEach(() => {
    cy.screenshot(); 
  });

});

describe('Create Card Form', () => {

  beforeEach(() => {
    cy.visit('http://localhost:1234/');
  });

  it('should add a new card when both term and description are provided', () => {
    cy.get('#cardSetPage', { timeout: 10000 }).should('exist').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="toggle_form"]').click();  
    
    const term = '20';
    const description = 'fend project prepare for production';
    
    cy.get('#termInput').type(term);
    cy.get('#descriptionInput').type(description);
    
    cy.get('input[type="submit"]').click();
    
    cy.get('.cardContainer').should('contain', term);
    cy.get('.cardContainer').should('contain', description);
  });

  it('should show an error when both term and description are empty', () => {

    cy.get('#cardSetPage', { timeout: 10000 }).should('exist').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="toggle_form"]').click();  
    
    cy.get('input[type="submit"]').click();
    
    cy.get('.error').should('contain.text', 'TERM AND DESCRIPTION CANNOT BE EMPTY');
  });

  afterEach(() => {
    cy.screenshot(); 
  });

});