const {retornarUsuarios, adicionarNovoUsuario} = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuários', () => {
  it('Validar que posso adicionar um novo nome de usuário na lista', () => {
    // Adicionar novo nome na lista de usuários
    adicionarNovoUsuario('Julio');

    // Retornar a lista de usuários
    const lista = retornarUsuarios();

    // Verificar o novo nome na lista de usuários
    expect(lista).to.contain('Julio');
    expect(lista.at(-1)).to.equal('Julio');

  });
});