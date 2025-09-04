describe('Lista de tarefas', () => {
  it('Deve adicionar nova tarefa', () => {
    cy.visit('https://kaiquecovo.github.io/pagina-html-inserir-tabela-teste-e2e/')
    cy.get('[id="input-item"]').type("Comprar PC")
    cy.get('[type="submit"]').click()
    cy.get("#lista-itens li").should("contain", "Comprar PC")
  })

  it('Não deve adicionar nova tarefa sem nome', () => {
    cy.visit('https://kaiquecovo.github.io/pagina-html-inserir-tabela-teste-e2e/')

    cy.get('[type="submit"]').click()
    cy.get('li').should('not.exist')
    cy.get('li').should('have.length', 0)
  })

})