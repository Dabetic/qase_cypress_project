import { loginPage } from "./Pages/loginPage";
import { projectPage } from "./Pages/projectPage";
import { navigationPage } from "./Pages/navigationPage";
import { repositoryPage } from "./Pages/reposistoryPage";
import { testCasePage } from "./Pages/testCasePage"

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

let searchWithProjectName;

Cypress.Commands.add('createProject', (testProjName, codeName, description, projAccessType, memberAccessType) => {

  let codeNameAdd = "CODE";
  searchWithProjectName = testProjName;

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
  cy.get(projectPage.searchForProjectInput).clear().type(testProjName);
  cy.get(projectPage.createdProjectSelection).should("have.length.below", 2);
  cy.get(projectPage.createdProjectSelection).click();
  cy.url().should("include", "https://app.qase.io/project/");

})

/**
 * @memberof cy
 * @method deleteCreatedProject
 */

Cypress.Commands.add('deleteCreatedProject', () => {

  cy.get(navigationPage.projectsBtn).click();
  cy.get(projectPage.searchForProjectInput).clear().type(searchWithProjectName);
  cy.get(projectPage.createdProjectSelection).should("have.length.below", 2);
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
 * @param name add a test name
 * @param parentName type a parent name
 * @param description add a description
 * @param preconditions add preconditions
 */

Cypress.Commands.add("createTestSuit", (name, parentName, description, preconditions ) => {

  cy.get(navigationPage.projectsBtn).click();
  cy.get(projectPage.searchForProjectInput).clear().type(searchWithProjectName);
  cy.get(projectPage.createdProjectSelection).should("have.length.below", 2);
  cy.get(projectPage.createdProjectSelection).click();
  cy.get(repositoryPage.createATestSuitBtn).click();
  cy.get(repositoryPage.testSuitName).clear().type(name);
  cy.get(repositoryPage.parentSuitInput).type(parentName + "{downArrow}{enter}");
  cy.get(repositoryPage.descriptionInput).eq(0).clear().type(description);
  cy.get(repositoryPage.preconditionsInput).eq(1).clear().type(preconditions);
  cy.get(repositoryPage.createBtn).click();
  cy.get(repositoryPage.createdTestSuite.replace("$", name)).should("have.text", name);
})

/**
 * @memberof cy
 * @method createTestCase
 * @param title add title
 * @param statusOptions add the option
 * @param desc add the description
 * @param suiteOptions add a test suite option
 * @param severity add an option
 * @param priority add an option
 * @param type add an option
 * @param layer add an option
 * @param isFlacky add an option
 * @param milestone add an option
 * @param behavior add an option
 * @param autoStatus add an option
 */

Cypress.Commands.add('createTestCase', (
    title,statusOptions,desc,
    suiteOption, severity,
    priority,type,layer,
    isFlacky,milestone,behavior,autoStatus ) => {

  cy.get(navigationPage.projectsBtn).click();
  cy.get(projectPage.searchForProjectInput).clear().type(searchWithProjectName);
  cy.get(projectPage.createdProjectSelection).should("have.length.below", 2);
  cy.get(projectPage.createdProjectSelection).click();
  cy.get(repositoryPage.createCaseBtn).click();
  cy.get(testCasePage.titleInput).clear().type(title);
  cy.get(testCasePage.statusInput).type(statusOptions + "{downArrow}{enter}");
  cy.xpath(testCasePage.descInput).type("Description");
  cy.xpath(testCasePage.suiteDropDown).type(suiteOption + "{downArrow}{enter}");
  cy.xpath(testCasePage.dropDownInput.replace("$", "Severity" ))
      .type(severity + "{downArrow}{enter}");
  cy.xpath(testCasePage.dropDownInput.replace("$", "Priority" ))
      .type(priority + "{downArrow}{enter}")
  cy.xpath(testCasePage.dropDownInput.replace("$", "Type" ))
      .type(type + "{downArrow}{enter}");
  cy.xpath(testCasePage.dropDownInput.replace("$", "Layer" ))
      .type(layer + "{downArrow}{enter}");
  cy.xpath(testCasePage.dropDownInput.replace("$", "Is flaky" ))
      .type(isFlacky + "{downArrow}{enter}");
  cy.xpath(testCasePage.dropDownInput.replace("$", "Milestone" ))
      .eq(0).type(milestone + "{downArrow}{enter}");
  cy.xpath(testCasePage.dropDownInput.replace("$", "Behavior" ))
      .type(behavior + "{downArrow}{enter}");
  cy.xpath(testCasePage.dropDownInput.replace("$", "Automation status" ))
      .type(autoStatus + "{downArrow}{enter}");
})
