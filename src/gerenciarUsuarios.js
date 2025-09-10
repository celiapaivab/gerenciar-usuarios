const usuarios = [
  {
    nome: "Matheus",
    email: "matheus@email.com"
  },
  {
    nome: "Lucas",
    email: "lucas@email.com"
  },
  {
    nome: "Marcos",
    email: "marcos@email.com"
  },
  {
    nome: "João",
    email: "joao@email.com"
  },
];

function retornarUsuarios() {
  return usuarios;
}

function adicionarNovoUsuario(name) {
  usuarios.push(name);
}

module.exports = {
  retornarUsuarios,
  adicionarNovoUsuario,
};
