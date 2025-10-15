// Kode DOM Manipulation

const judul = document.querySelector('h1')
judul.innerHTML ='<em>Zaidan Rezkyando</em>'
judul.style.backgroundColor ='lightblue'
judul.style.boxShadow = '0px 5px 15px rgba(0,0,0,0.5)'


const p4 = document.querySelector('#b p')
p4.style.color = 'red'
p4.style.fontWeight = '800'
p4.style.backgroundColor = 'gray'

// setAttribute()
const p3 = document.querySelector('.p3')
p3.classList.add('baru')