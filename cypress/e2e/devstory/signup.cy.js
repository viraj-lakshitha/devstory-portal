/// <reference types="cypress" />

import { slowCypressDown } from "cypress-slow-down"

slowCypressDown(500) // Remove if you don't want to slow down the cypress automation 

describe('Test Signup Functionality', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/signup")
    cy.url().then(value => {
      cy.log("Current URL", value)
    })

    cy.contains('Hey, New User !').should('exist')
    cy.url().should('include', '/signup')
  })


  it('Check the Signup functionality', () => {
    cy.get("input#fullName.login-right-container-form-item-input").type("Test User")
    cy.get("input#username.login-right-container-form-item-input").type("user")
    cy.get("input#email.login-right-container-form-item-input").type("user@devstory.com")
    cy.get("input#password.login-right-container-form-item-input").type("Password@12#$")
    cy.get("input#passwordCopy.login-right-container-form-item-input").type("Password@12#$")
    cy.get("button.signup-right-container-form-action").click() // TODO : API not integrated yet
  })

  it('Check the routes in Signup page', () => {
    cy.contains('New User to DevStory? SignUp').click()
    cy.url().then(value => {
      cy.log("Current URL", value)
    })
    cy.url().should('include', '/login')

    cy.go('back')
    cy.url().then(value => {
      cy.log("Current URL", value)
    })
    cy.url().should('include', '/signup')
  })
})