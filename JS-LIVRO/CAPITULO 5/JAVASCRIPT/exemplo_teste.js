let carros = []
carros.push({ modelo: 'Fusca', preco: 6500 })
carros.push({ modelo: 'Celta', preco: 3500 })
let outTest = document.querySelector('#outTeste')
let conc = ''
for (let i = 0; i < carros.length; i++) {
  conc += carros[i].modelo + ' R$: ' + carros[i].preco + '<br/>'
}

outTest.innerHTML = conc
