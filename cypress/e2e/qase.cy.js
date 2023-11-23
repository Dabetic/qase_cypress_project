beforeEach(() => {
  cy.login('milos.dabetic@gmail.com', 'Milosdabetic90&');
})

describe('qase', () => {

  it('createNewProject', () => {

    cy.createProject('TestProject1', 
    'TP1', 
    'Testing description text', 
    'Private', 
    "Don't add members");
  });

  it('createTestSuite', () => {

    cy.createTestSuit("Test Suite 1", "Project root", "Description 1", "No Preconditions");
  });

  it('createTestCase', () => {

    cy.createTestCase("Test Case 1", "Draft",
        "New desc", "Name Test", "Normal",
        "Medium","Functional","E2E",
        "No","Not set", "Positive", "Automated" );
  });

  afterEach(() => {

    cy.screenshot({screenshotOnRunFailure:true, screenshotsFolder : '../support/Pages/screenshots'})

  })

  after(() => {

    cy.login('milos.dabetic@gmail.com', 'Milosdabetic90&');
    cy.deleteCreatedProject();
  })

})