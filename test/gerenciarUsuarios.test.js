const {retornarUsuarios, adicionarNovoUsuario} = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuários', () => {
  it('Validar que posso adicionar um novo nome de usuário na lista', () => {
    // Adicionar novo nome na lista de usuários
    adicionarNovoUsuario({
      nome: 'Julio',
      email: 'julio@email.com'    
    });

    // Retornar a lista de usuários
    const lista = retornarUsuarios();

    // Verificar o novo nome na lista de usuários
    expect(lista.at(-1).nome).to.equal('Julio');
    expect(lista.at(-1).email).to.equal('julio@email.com');
    expect(lista.at(-1)).to.eql({
      nome: 'Julio',
      email: 'julio@email.com'    
    });

  });
});