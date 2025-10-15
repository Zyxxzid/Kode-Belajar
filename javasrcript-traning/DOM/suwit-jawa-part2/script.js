function pilihanCom() {
  const com = Math.random()
  if (com < 0.34) return 'gajah'
  if (com >= 0.34 && com < 0.67) return 'semut'
  return 'orang'
}

function getHasil(com, user) {
  if (user == com) return 'seri'
  if (user == 'gajah') return com == 'orang' ? 'menang' : 'kalah'
  if (user == 'orang') return com == 'semut' ? 'menang' : 'kalah'
  if (user == 'semut') return com == 'gajah' ? 'menang' : 'kalah'
}

const gajah = document.querySelector('.gajah')
const semut = document.querySelector('.semut')
const orang = document.querySelector('.orang')

// gajah.addEventListener('click', function() {
//   const com = pilihanCom()
//   const user = gajah.className
//   const hasil = getHasil(com, user)
//   console.log(hasil)

//   const imageCom = document.querySelector('.img-komputer')
//   imageCom.setAttribute('src', `img/${com}.png`)

//   const info = document.querySelector('.info')
//   info.innerHTML= hasil
// })


// semut.addEventListener('click', function() {
//   const com = pilihanCom()
//   const user = semut.className
//   const hasil = getHasil(com, user)
//   console.log(hasil)

//   const imageCom = document.querySelector('.img-komputer')
//   imageCom.setAttribute('src', `img/${com}.png`)

//   const info = document.querySelector('.info')
//   info.innerHTML= hasil
// })

// orang.addEventListener('click', function() {
//   const com = pilihanCom()
//   const user = orang.className
//   const hasil = getHasil(com, user)
//   console.log(hasil)

//   const imageCom = document.querySelector('.img-komputer')
//   imageCom.setAttribute('src', `img/${com}.png`)

//   const info = document.querySelector('.info')
//   info.innerHTML= hasil
// })

function putar() {
  const imgCom = document.querySelector('.img-komputer')
  const image = ['gajah', 'semut', 'orang']
  let i = 0
  const waktu = new Date().getTime()

  const intervalId = setInterval(function () {
    imgCom.setAttribute('src', `img/${image[i++]}.png`)
    if (i == image.length) i = 0

    if (new Date().getTime() - waktu > 1000) {
      clearInterval(intervalId)
    }
  }, 100)
}


const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function (pImg) {
  pImg.addEventListener('click', function () {
    const com = pilihanCom()
    const user = pImg.className
    const hasil = getHasil(com, user)
    console.log(hasil)

    putar()

    setTimeout(function() {
      const imageCom = document.querySelector('.img-komputer')
      imageCom.setAttribute('src', `img/${com}.png`)

      const info = document.querySelector('.info')
      info.innerHTML= hasil
    },1000)
  })
})