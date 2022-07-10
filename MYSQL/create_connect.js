const mysql = require('mysql')

let con = mysql.createConnection({
  host: 'localhost',
  user: 'sqluser',
  password: 'password',
  database: 'mydb'
  //jdbc:mysql://localhost:3306/?user=root
})

/* con.connect(function (error) {
  if (error) throw error
  console.log('Connected')
}) */

/* con.connect(function (error) {
  if (error) {
    throw error
  } else {
    console.log('Connected') */
/* con.query(sql, function (err, result) {
  if (err) throw err
  console.log('Result:' + result)
}) */
/*   }
}) */

/* con.query('CREATE DATABASE mydb', function (err, result) {
    if (err) throw err
    console.log('Database created')
  })
con.end()

let sql = 'CREATE TABLE usuarios (nome VARCHAR(255),endereco VARCHAR(255))'
con.query(sql, (err, result) => {
  if (err) throw err
  console.log('Table created')
})
con.end
 */
/* let sql = 'ALTER TABLE usuarios ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY'
con.query(sql, function (err, result) {
  if (err) throw err
  console.log('primary key add')
})
con.end()
 */

export let a = document
  .querySelector('.btn_Text')
  .addEventListener('click', () => {
    let in_Text = document.querySelector('.input_text')
    let text = in_Text.value
    let in_Date = document.querySelector('.input_date')
    let date = in_Date.value
    var sql = `INSERT INTO usuarios (nome, endereco) VALUES (${text}, ${date})`
  })
