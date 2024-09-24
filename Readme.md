
## Prerequisites - Cypress

Make sure the following software is installed on your machine:
- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)
- [Cypress](https://www.cypress.io/)

## HTML Under Test
To start the local server and test the HTML file:

1. Navigate to the `public` folder in your terminal:
    ```bash
    cd public
    ```

2. Install `http-server` globally (this will allow you to easily serve static files):
    ```bash
    npm install -g http-server
    ```

3. Run the server:
    ```bash
    http-server
    ```

4. Access the website on your browser at one of the following URLs:
    - [http://192.168.1.25:8080](http://192.168.1.25:8080)
    - [http://127.0.0.1:8080](http://127.0.0.1:8080)

## Test Descriptions (src/tests/)
Here is a breakdown of the test cases located in the `cypress/e2e/` folder:

- **`projectDetails.cy.js`**: Verifies that the correct project name and size are displayed on the page.
- **`tabNavigation.cy.js`**: Ensures that navigation tabs (e.g., Dashboard, Plot List, Investments, Claims) are functional and load the correct sections.
- **`plotDetails.cy.js`**: Checks plot details such as plot names, sizes, and associated controls (e.g., edit buttons, add crops).
- **`sidebar.cy.js`**: Tests that the sidebar displays correctly, with the correct active tab and visible options.


## page objects
cypress/support

## TEST RUN
 npx cypress open  

 ## REPORT
Cypress/screenshots
mochawesome ready config

