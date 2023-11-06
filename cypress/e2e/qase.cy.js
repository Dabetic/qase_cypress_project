
import { projectPage } from "../support/Pages/projectPage"
import { navigationPage } from "../support/Pages/navigationPage";

beforeEach(() => {

  cy.login('milos.dabetic@gmail.com', 'Milosdabetic90&');

})

describe('quse', () => {
  it('createNewProject', () => {

    let codeNameAdd = "CODE"
  
    cy.get(projectPage.createNewProjectBtn).click();
    cy.get(projectPage.projectNameInput).clear();
    cy.get(projectPage.projectNameInput).type('TestProject');

    cy.get(projectPage.projectCodeInput).clear();
    cy.get(projectPage.projectCodeInput).type('TP' + codeNameAdd);
    cy.get(projectPage.descInput).clear();
    cy.get(projectPage.descInput).type('Testing description text');

    cy.xpath(projectPage.projAccessTypeRadio.private).click();
    cy.xpath(projectPage.memberAccessTypeRadio.dontAddMemb).click();
    cy.xpath(projectPage.createAProjectBtn).click();



  })

after(()=>{

    cy.get(navigationPage.projectsBtn).click();
    cy.get(projectPage.searchForProjectInput).clear();
    cy.get(projectPage.searchForProjectInput).type('TestProject');

    cy.wait(1500);

    cy.get(projectPage.kebabMenu).click();
    cy.get(projectPage.kebamRemoveBtn).click();
    cy.get(projectPage.kebabDeleteProjectBtn).click();
    cy.get(navigationPage.userMenuBtn).click();
    cy.xpath(navigationPage.SignOutBtn).click();

    cy.url().should('eq', 'https://app.qase.io/login')
})


})