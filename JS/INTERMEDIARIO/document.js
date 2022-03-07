/* let paragrafos = document.getElementsByTagName('p')

let modificado = paragrafos.array.map(function (elemento) {
  body.elemento.innerHTML = '<p>NOVO</p>' + document.body.innerHTML
}) */

/* const usuariosLista = [
  { nome: 'Álife', credit: 500 },
  { nome: 'Lucas', credit: 600 },
  { nome: 'Romario', credit: 900 }
]

let inserir = usuariosLista.map(function (elemento) {
  document.body.innerHTML =
    `<p>${
      ' <strong> ' +
      elemento.nome +
      ' </strong> ' +
      ' <strong> ' +
      elemento.credit +
      '</strong>'
    }</p>` + document.body.innerHTML
}) */

const info = [
  {
    title: '<h1>HTML + CSS + JS</h1>',
    sinapse:
      '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br> Neque asperiores rerum enim delectus quo alias quasi, ipsa praesentium. <br>Dignissimos ipsam perferendis a ad beatae minus, qui non maiores quam illo.</p>',
    img: "<img  class ='imgs-js' src='https://apexensino.com.br/wp-content/uploads/2017/11/html-css-javascript.jpg'></img>"
  },
  {
    title: '<h2>MYSQL + FIREBASE</h2>',
    sinapse:
      '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br> Neque asperiores rerum enim delectus quo alias quasi, ipsa praesentium. <br>Dignissimos ipsam perferendis a ad beatae minus, qui non maiores quam illo.</p>',
    img: '<img class = "imgs-js" src = "https://res.cloudinary.com/hevo/image/upload/f_auto,q_auto/$wpsize_!_cld_full!,w_1288,h_728,c_scale/v1619240667/hevo-learn/Feature-Image-for-Firebase-MySQL-Blog.png"> </img>'
  }
]
const mostrarInfo = info.forEach(function (mostrar) {
  document.body.innerHTML =
    `<div>${mostrar.title + mostrar.sinapse + mostrar.img}</div>` +
    document.body.innerHTML
})
