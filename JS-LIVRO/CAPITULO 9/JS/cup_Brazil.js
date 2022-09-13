function addClub() {
    var inText = document.querySelector('#inClub');
    var text = inText.value;
    if (text == '' || text.length == 0) {
        alert('Informe um valor válido');
        location.reload();
    }
    verify(text);
    generateClub(text);
    inText.value = '';
}
function generateClub(nameClub) {
    var father = document.querySelector('.content_Elements');
    var textElement = document.createTextNode(nameClub);
    var h3 = document.createElement('h3');
    h3.className = 'max_Font'
    h3.appendChild(textElement);
    father.appendChild(h3);
}
function verify(nameClub) {
    var father = document.querySelector('.content_Elements');
    let childs = father.querySelectorAll('h3')
    for(let i = 0; i<childs.length;i++){
        if(childs[i] == nameClub){
            alert('Time já inserido')
        }
    }
}
var btnAdd = document.querySelector('#btn_Add');
btnAdd.addEventListener('click', addClub);
