/// <reference types="cypress" />

describe('Test Login Functionality', () => {
  beforeEach(() => {
    cy.visit("https://devstory-portal.herokuapp.com/login")
    cy.url().then(value => {
      cy.log("Current URL", value)
    })
  })

  it('Check the login functionality', () => {
    cy.url().should('include', '/login')
    cy.get("input#username.login-right-container-form-item-input").type("user")
    cy.get("input#password.login-right-container-form-item-input").type("Password@12#$")
    // cy.get("button.login-right-container-form-action").click() // TODO : Not implement on UI yet
  })

  it('Check the navigation and validate the page', () => {
    cy.contains("Welcome Back !").should('exist')
    
    cy.get("a > p.login-right-container-signup").click() // click on the selected item
    cy.url().should('include', '/signup') // verify the URL
    cy.url().then(value => {
      cy.log("Current URL", value)
    })
    
    cy.go('back') // go back on browser to previous url
    cy.url().should('include', '/login') // verify the URL
    cy.url().then(value => {
      cy.log("Current URL", value)
    })
  })
})