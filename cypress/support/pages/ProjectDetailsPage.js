// cypress/support/pages/ProjectDetailsPage.js

class ProjectDetailsPage {
    visit() {
      cy.visit('http://127.0.0.1:8080/');
    }
  
    verifyProjectDetails(index, name, area) {
      cy.get(`.plot:nth-child(${index}) > h2`).should('contain', name);
      cy.get(`.plot:nth-child(${index}) > span`).should('contain', area);
      cy.get(`.plot:nth-child(${index})`).within(() => {
        cy.get('button').contains('Edit details').should('be.visible');
        cy.get('button').contains('Add Crops').should('be.visible');
      });
    }
  }
  
  export default new ProjectDetailsPage();
  