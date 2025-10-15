//menangkap inputan user
let user = prompt('pilih : gajah, semut, orang')


// menangkap pilihan computer
// membangkitkan pilihan random
let com = Math.random()

if (com < 0.34) {
  com = 'gajah'
}else if(com >= 0.34 && com < 0.67){
  com = 'semut'
}else{
  com = 'orang'
}

let hasil = ''
// menentukan rules
if (user == com) {
  hasil = 'seri'
}else if( user == 'gajah'){
  if (com == 'orang') {
    hasil = 'Kamu menang'
  }else{
    hasil = 'Kamu Kalah'
  }
}else if( user == 'orang'){
  if (com == 'semut') {
    hasil = 'Kamu menang'
  }else{
    hasil = 'Kamu Kalah'
  }
}else if( user == 'semut'){
  if (com == 'gajah') {
    hasil = 'Kamu menang'
  }else{
    hasil = 'Kamu Kalah'
  }
}else{
  hasil = 'pilihan yang anda masukan tidak valid!!'
}
// tampilkan hasilnya
alert(`kamu : ${user}, com : ${com} : ${hasil}`)