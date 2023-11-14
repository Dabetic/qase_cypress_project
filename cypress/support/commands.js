import { loginPage } from "../support/Pages/loginPage";
import { projectPage } from "./Pages/projectPage";
import { navigationPage } from "../support/Pages/navigationPage";
import { repositoryPage } from "./Pages/reposistoryPage";

/**
 * @memberof cy
 * @method login
 * @param email , enter an email
 * @param password , enter a password
 * @description use to login
 */

Cypress.Commands.add('login', (email, password) => {

  cy.visit('https://app.qase.io/login')

  cy.clearAllCookies();
  cy.clearAllLocalStorage();

  cy.get(loginPage.email).clear().type(email);
  cy.get(loginPage.password).clear().type(password);
  cy.get(loginPage.signInBtn).click();

  cy.url().should('eq', 'https://app.qase.io/projects')

})

/**
 * @memberof cy
 * @method createProject
 * @param projectName projectName
 * @param codeName codeName
 * @param description description
 * @param projAccessType private&public
 * @param memberAccessType addAllMemb&DontAddMemb
 */

Cypress.Commands.add('createProject', (testProjName, codeName, description, projAccessType, memberAccessType) => {

  let codeNameAdd = "CODE"

  cy.get(projectPage.createNewProjectBtn).click();
  cy.get(projectPage.projectNameInput).clear().type(testProjName);

  cy.get(projectPage.projectCodeInput).clear().type(codeName + codeNameAdd);
  cy.get(projectPage.descInput).clear().type(description);


  if (projAccessType === 'Private') {
    cy.xpath(projectPage.projAccessTypeRadio.private).click();

    if (!memberAccessType.includes('Add all members')) {
      cy.xpath(projectPage.memberAccessTypeRadio.dontAddMemb).click();
    }
  }

  if (projAccessType === 'Public') {
    cy.xpath(projectPage.projAccessTypeRadio.public).click();
  }

  cy.xpath(projectPage.createAProjectBtn).click();

  cy.get(navigationPage.projectsBtn).click();
  cy.get(projectPage.searchForProjectInput).clear().type('TestProject');
  cy.xpath(projectPage.createdProjectSelection).click();

})

/**
 * @memberof cy
 * @method deleteCreatedProject
 */

Cypress.Commands.add('deleteCreatedProject', () => {

  cy.get(navigationPage.projectsBtn).click();
  cy.get(projectPage.searchForProjectInput).clear().type('TestProject');

  cy.wait(2000);

  cy.get(projectPage.kebabMenu).click();
  cy.get(projectPage.kebabRemoveBtn).click();
  cy.get(projectPage.kebabDeleteProjectBtn).click();
  cy.get(navigationPage.userMenuBtn).click();
  cy.xpath(navigationPage.signOutBtn).click();

  cy.url().should('eq', 'https://app.qase.io/login');

})

/**
 * @memberof cy
 * @method createTestSuit
 */

Cypress.Commands.add('createTestSuit', (name, description, preconditions ) => {

  cy.get(projectPage.searchForProjectInput).clear().type('TestProject');
  cy.xpath(projectPage.createdProjectSelection).click();

  cy.wait(3000);

  cy.get(repositoryPage.createATestSuitBtn).click();
  cy.get(repositoryPage.testSuitName).clear().type(name);
  cy.get(repositoryPage.partnetSuitInput).click();

  cy.get(repositoryPage.projectRootOptin).click();

  cy.get(repositoryPage.descriptionInput).eq(0).clear().type(description);
  cy.get(repositoryPage.preconditionsInput).eq(1).clear().type(preconditions);
  cy.get(repositoryPage.createBtn).click();
})

