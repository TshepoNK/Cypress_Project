
describe('Navigation Links Test', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:8080/'); 
    });
  
    it('should navigate to the correct pages', () => {
      // Click dashboard
      cy.get('a:nth-child(1)').should('have.attr', 'href', '#dashboard');
      cy.get('a:nth-child(1)').click();
      cy.url().should('include', '#dashboard');
      // Click plot
      cy.get('a:nth-child(2)').should('have.attr', 'href', '#plot-list');
      cy.get('a:nth-child(2)').click();
      cy.url().should('include', '#plot-list');
      // click investments
      cy.get('a:nth-child(3)').should('have.attr', 'href', '#investments');
      cy.get('a:nth-child(3)').click();
      cy.url().should('include', '#investments');
      // click claims
      cy.get('a:nth-child(4)').should('have.attr', 'href', '#claims');
      cy.get('a:nth-child(4)').click();
      cy.url().should('include', '#claims');
    });
  });
  