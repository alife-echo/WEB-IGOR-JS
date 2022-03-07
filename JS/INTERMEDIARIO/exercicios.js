function calcular(n1, n2) {
  n1 = document.getElementById('entrada1')
  n2 = document.getElementById('entrada2')
  let soma = parseFloat(n1.value) + parseFloat(n2.value)

  document.body.innerHTML = `<p>${soma}</p>` + document.body.innerHTML
}
