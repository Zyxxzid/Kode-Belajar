let nama = prompt("masukan nama anda : ")
alert(`halo ${nama} selamat datang di dunia coding!!`)


let umur = prompt(`${nama} masukan umur anda : `)
alert(`program akan mengkonndisikan umur kamu apakah tergolong masih kecil atau sudah dewasa!1`)
alert(`program sedang di proses...`)

if(umur >= 0 && umur <= 17){
    alert(`${nama} usia kamu yang masih ${umur}, tergolong ke usia anak anak`)
}else if(umur >= 18 && umur <= 24){
    alert(`${nama} usia kamu yang masih ${umur}, tergolong ke usia remaja`)
}else if(umur >= 25 && umur <= 35){
    alert(`${nama} usia kamu yang masih ${umur}, tergolong ke usia dewasa`)
}else if(umur >= 36){
    alert(`${nama} usia kamu yang masih ${umur}, tergolong ke usia lanjut usia`)
}else{
    alert(`${nama} umur kamu tidak dapat di baca program`)
}