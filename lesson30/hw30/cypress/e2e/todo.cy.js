describe('template spec', () => {
  it('should have id', () => {
    cy.request({
      method: "get",
      url: "https://678518331ec630ca33a72cbf.mockapi.io/todo"
    }).as('todo');

    cy.get("@todo").then((response) => {
      const status = response.status;
      const body = response.body;

      expect(status).to.eq(200)
      expect(body[0]).to.have.property('id')
    })
  })
})