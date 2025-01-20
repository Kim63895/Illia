import React from "react";
import TodoForm from "./TodoForm";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("<TodoForm />", () => {
  beforeEach(() => {
    cy.mount(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );
  });
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );
  });
  it("Check Titel", () => {
    cy.get("h1").should(($h1) => {
      expect($h1).to.have.text("Todo");
    });
  });
  it("Check Field accepts both numbers and letters", () => {
    cy.get("input").type("123abc");
    cy.get("input").should("have.value", "123abc");
  });

  it("Check button test for minimum length", () => {
    cy.get("button[type='submit']")
      .click()
      .should("have.text", "Add")
      .and("have.length.greaterThan", 0);
  });

  it("Check input value and new todo task", () => {
    cy.get("input").type("New Todo Task");
    cy.get("button[type='submit']").click();

    cy.get("li").should("contain.text", "New Todo Task");
  });
});
