// Kode DOM manipulation Node


// menambahkan element baru lewat javaScript
// =============< appendChild >===================== //
const newp = document.createElement('h1')
const tulisan = document.createTextNode('halo dunia:)')

// simpan tulisan ke dalam paragraf!
newp.appendChild(tulisan)

// menampilkan tulisan
const sectiona = document.querySelector('#a')
sectiona.appendChild(newp)

// [appendChild] : "meletakan element di bagian akhir"




// =================================================================== //


// =============< InsertBefore >===================== //

const liBaru = document.createElement('li')
const textLi = document.createTextNode('item 4')

// simpan tulisan di li
liBaru.appendChild(textLi)

// ambil parent dan data setelah
const ul = document.querySelector('section#b ul')
const li2 = ul.querySelector('li:nth-child(2)')

// peletakan li
ul.insertBefore(liBaru, li2)





// =============< removeChild >===================== //
// menghapus child
const sectionA = document.querySelector('section#a')
const link = sectionA.getElementsByTagName('a')[0]

// menghapus link
sectionA.removeChild(link)



// =============< replaceChild >===================== //
// mengganti child

// ambil parent
const sectionBB = document.querySelector('section#b')
const paragraf4 = sectionBB.getElementsByTagName('p')[0]

// buat element baru
const tambahH1 = document.createElement('h1')
const texth1 = document.createTextNode('Hai, Zaidan :)')

// masukan text ke dalam elementnya
tambahH1.appendChild(texth1)

// ganti element
sectionBB.replaceChild(tambahH1, paragraf4)

// berikan warna pada element yang baru di tambahkan
newp.style.backgroundColor = 'lightgreen'
liBaru.style.backgroundColor = 'lightgreen'
tambahH1.style.backgroundColor = 'lightgreen'