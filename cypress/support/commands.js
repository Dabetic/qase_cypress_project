import { loginPage } from "../support/Pages/loginPage"

/**
 * @memberof cy
 * @method login
 * @param email , enter an email
 * @param password , enter a password
 */

 Cypress.Commands.add('login', (email, password) => { 
    
    cy.visit('https://app.qase.io/login')

    cy.clearAllCookies();
    cy.clearAllLocalStorage();

    cy.get(loginPage.email).type(email);
    cy.get(loginPage.password).type(password);
    cy.get(loginPage.signInBtn).click();

  })
