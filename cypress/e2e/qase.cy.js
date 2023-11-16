import {repositoryPage} from "../support/Pages/reposistoryPage";
import {testCasePage} from "../support/Pages/testCasePage";

beforeEach(() => {
  cy.login('milos.dabetic@gmail.com', 'Milosdabetic90&');
})

describe('qase', () => {

  it.skip('createNewProject', () => {

    cy.createProject('TestProject', 
    'TP', 
    'Testing description text', 
    'Private', 
    "Don't add members");


  });

  it('createTestSuite', () => {

    cy.createTestSuit("nameT", "desc1", "no Preconditions");
    cy.createTestCase("Test Case 1", "Draft");

  });

  it.skip('createTestCase', () => {
    cy.createTestCase("test case 1", "Draft")

  });

  afterEach(() => {

    cy.screenshot({screenshotOnRunFailure:true, screenshotsFolder : '../support/Pages/screenshots'})

  })

  // after(() => {

  //   cy.deleteCreatedProject();

  // })

})