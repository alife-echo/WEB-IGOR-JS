function calcularMedia() {
  let inputName = document.getElementById('inName')
  let inputNota1 = document.getElementById('inNota_Um')
  let inputNota2 = document.getElementById('inNota_Dois')
  let inputNota3 = document.getElementById('inNota_Tres')
  let outConceito = document.getElementById('outConceito')
  let name = inputName.value
  let nota1 = Number(inputNota1.value)
  let nota2 = Number(inputNota2.value)
  let nota3 = Number(inputNota3.value)
  let media = (nota1 + nota2 + nota3) / 3
  document.getElementById('outMedia').textContent =
    'Média das Notas:' + media.toFixed(1)
  if (media >= 5) {
    outConceito.textContent = 'Parabéns ' + name + '!' + ' Você foi aprovado'
    outConceito.style.color = 'blue'
  } else {
    outConceito.textContent =
      'Estude mais ' + name + '!' + ' Você foi reprovado'
    outConceito.style.color = 'red'
  }
}

let button = document.getElementById('btnMedia')
button.addEventListener('click', calcularMedia)
