
beforeEach(() => {

  cy.login('milos.dabetic@gmail.com', 'Milosdabetic90');

})

describe('qase', () => {
  it('createNewProject', () => {

    cy.createProject('TestProject', 'TP', 'Testing description text', 'Private', "Don't add members");

  })

  afterEach(() => {

    cy.screenshot({screenshotOnRunFailure:true, screenshotsFolder : '../support/Pages/screenshots'})

  })

  after(() => {

    cy.deleteCreatedProject();

  })

})