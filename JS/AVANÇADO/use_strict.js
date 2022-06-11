'use strict'
//uso rigoroso, serve  para alertar erro sobre variaveis não declaradas
// se não tiver o use strict, a variavel saira da função é sera global
function print() {
  x = 3
  console.log(x)
}
print()
