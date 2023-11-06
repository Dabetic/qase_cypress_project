
beforeEach(() => {

  cy.login('milos.dabetic@gmail.com', 'Milosdabetic90&');

})

describe('qase', () => {
  it('createNewProject', () => {

    cy.createProject('TestProject','TP','Testing description text','Private',"Add all members");

  })

after(()=>{

  cy.deleteCreatedProject();

})

})