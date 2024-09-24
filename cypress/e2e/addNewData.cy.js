describe('Land Management New project Data', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:8080/'); 
    });
  
    it('add new project data', () => {
      cy.get('add-new-data').click();
      // Assuming a form appears, fill in the project details
      cy.get('input[name="projectName"]').type('New Land project'); 
      cy.get('input[name="area"]').type('1500.00'); 
      cy.get('select[name="cropType"]').select('Wheat'); 
      // Submit the form
      cy.get('button[type="submit"]').click(); 
      // Verify that the new project appears in the list
      cy.get('.plot').last().within(() => {
        cy.get('h2').should('contain', 'New Land Project');
        cy.get('span').should('contain', '1500.00 ha'); // Check the area
      });
    });
  });
  