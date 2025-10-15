// Kode DOM Selection 

// DOM Selection : document.getElemetById() -> mengembalikan Element
const judulH1 = document.getElementById('judul')

judulH1.style.backgroundColor ='gray'
judulH1.innerHTML = 'halo anak baik' // mengubah text h1



// DOM Selection : document.getElementsByTagName() -> mengembalikan HTMLColection
// cara editnya pakai index array 
const paragraf = document.getElementsByTagName('p')

for(let i = 0 ; i < paragraf.length; i++){
    paragraf[i].style.backgroundColor ='lightblue'
}



// DOM Selection : document.getElementByClassName() -> Mengembalikan HTMLColection
const paragraf1 = document.getElementsByClassName('p1')[0]
paragraf1.innerHTML = 'Zaidan Rezkyando'
