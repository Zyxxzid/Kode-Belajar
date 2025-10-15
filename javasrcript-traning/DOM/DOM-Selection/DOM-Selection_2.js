// Kode DOM Selection Part-2

// DOM Selection : document.querySelector() -> menghasilkan 1 Element saja
// menyari sebuah elemet di dalam html layak nya seperti kita mau mencari element di css untuk di edit
const paragraf4 = document.querySelector('#b p')
paragraf4.style.color = 'blue'
paragraf4.style.fontSize = '30px'


// DOM Selection : document.querySelectorAll() -> menghasilkan nodeList
const paragrafSemua = document.querySelectorAll('p')
for(let i = 0; i < paragrafSemua.length; i++){
    paragrafSemua[i].style.color = 'green'
    paragrafSemua[i].style.backgroundColor = 'lightblue'

}
