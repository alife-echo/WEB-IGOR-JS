class Funcionario {
  matricula = 0
  constructor(nome, login, senha, salario_Minimo) {
    /*  if (this.constructor === Funcionario) {
      let error = document.querySelector('#error_abstract')
      error.innerHTML = '<h2>CLASSE ABSTRATA NÃO PODE SER INICIADA</h2>'
    } */

    this.#matricula = Funcionario.matricula
    Funcionario.matricula += 1
    this.#nome = nome
    this.#login = login
    this.#senha = senha
    this.#salario = salario_Minimo
  }

  get nome() {
    return this.#nome
  }
  set nome(value) {
    this.#nome = value
  }
  get matricula() {
    return this.#matricula
  }

  get login() {
    return this.#login
  }

  set login(value) {
    this.#login = value
  }
  get senha() {
    return this.#senha
  }
  set senha(value) {
    this.#senha = value
  }
  get salario() {
    return this.#salario
  }

  set salario(value) {
    this.#salario = value
  }

  emprimir() {
    let print = document.querySelector('#out_class')
    print.innerHTML = `Nome:${this.#nome},Matricula:${this.#matricula},Login:${
      this.#login
    },Senha:${this.#senha},Salario:${this.#salario}`
  }
}
let fun1 = Funcionario('Álife', 'Alife.silva', 3213, 3200)
fun1.emprimir()
