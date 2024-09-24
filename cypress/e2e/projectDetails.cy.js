import ProjectDetailsPage from '../support/pages/ProjectDetailsPage';

describe('Project Details Test', () => {
  beforeEach(() => {
    ProjectDetailsPage.visit(); 
  });

  it('should verify project names and their details', () => {
    //Assert that the user is on the project page
    cy.get('.active').should('contain', 'Project');
    // Verify details for Auerland
    ProjectDetailsPage.verifyProjectDetails(1, 'Auerland', '1222.74 ha');

    // Verify details for Waldeck 1
    ProjectDetailsPage.verifyProjectDetails(2, 'Waldeck 1', '2178.00 ha');

    // Verify details for Waldeck 2
    ProjectDetailsPage.verifyProjectDetails(3, 'Waldeck 2', '0.01 ha');
  });
});
