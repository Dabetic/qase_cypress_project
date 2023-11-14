
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

  }),

  it('createTestSuite', () => {

    cy.createTestSuit("nameT", "desc1", "no Preconditions");

  })

  afterEach(() => {

    cy.screenshot({screenshotOnRunFailure:true, screenshotsFolder : '../support/Pages/screenshots'})

  })

  // after(() => {

  //   cy.deleteCreatedProject();

  // })

})