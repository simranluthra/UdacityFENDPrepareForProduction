describe('Navigation Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:1234/');
  });
  
  it('should navigate to the card sets page when clicking on "Card Set" in the side menu', () => {
    cy.get('#cardSetPage', { timeout: 10000 }).should('exist').click();
    cy.get('.setContainer', { timeout: 10000 }).should('exist').click();
    cy.get('[data-cy="study-set-header"]', { timeout: 10000 }).should('contain.text', 'Study Set Library');

  });

  it('should navigate to the About page when clicking on "About" in the side menu', () => {
    cy.get('#aboutPage', { timeout: 10000 }).should('exist').click(); 
    cy.get('h2').should('contain.text', 'About Study Night'); 
  });

  it('should navigate to the Home page when clicking on "Home" in the side menu', () => {
    cy.get('#homePage', { timeout: 10000 }).should('exist').click(); 
    cy.get('h1').should('contain.text', 'Study Night'); 
  });

  afterEach(() => {
    cy.screenshot(); 
  });

});

