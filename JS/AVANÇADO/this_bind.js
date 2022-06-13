function call() {
  console.log(this.falar)
}
let cat = {
  falar: 'Miau',
  metodo: call
}
let dog = {
  falar: 'Auau',
  metodo: call
}
//this serve para se adequar ao contexto, ele sabe diferenciar o falar do gato com o falar do cachorro
dog.metodo()
cat.metodo()
//bind serve para eu dar o contexto de forma manual a minha função genereica
//função generica ligada ao objeto cachorro
let darContexto = call.bind(dog)

darContexto()
