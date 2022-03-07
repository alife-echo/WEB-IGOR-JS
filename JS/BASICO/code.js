function criarObjeto(nome, idade, cpf, rg, cep) {
  return {
    nome: nome,
    idade: idade,
    cpf: cpf,
    rg: rg,
    cep: cep
  }
}

let lista = [
  criarObjeto('Álife', 18, 04276656206, 7182579, 68501533),
  criarObjeto('Silva', 20, 33376657030, 3332579, 70501522),
  criarObjeto('Moraes', 15, 20223344552, 8083574, 23414555)
]

let armazenar = lista.forEach(function (elemento) {
  document.body.innerHTML =
    `<ul><li>${
      elemento.nome +
      elemento.idade +
      '<br>' +
      elemento.cpf +
      '<br>' +
      elemento.rg +
      '<br>' +
      elemento.cep
    }</li></ul>` + document.body.innerHTML
})
