// dom traversal
const tombolX = document.querySelectorAll('.close')

// for (let i = 0; i < tombolX.length; i++){
//     tombolX[i].addEventListener('click', function(e) {
//         // dom traversalnya :
//         // tombolX[i].parentElement.style.display = 'none'
//         e.target.parentElement.style.display = 'none'
//     })
// }

// atau buat seperti ini
tombolX.forEach(function (ev) {
    ev.addEventListener('click', function (e){
        e.target.parentElement.style.display = 'none'
    })
})

const nama = document.querySelector('.name')
console.log(nama.nextSibling)