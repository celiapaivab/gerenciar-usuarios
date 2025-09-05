const usuarios = ['Matheus', 'Lucas', 'Marcos', 'João'];

function retornarUsuarios() {
  return usuarios;
}

function adicionarNovoUsuario(name) {
  usuarios.push(name);
}

module.exports = {
  retornarUsuarios,
  adicionarNovoUsuario
}