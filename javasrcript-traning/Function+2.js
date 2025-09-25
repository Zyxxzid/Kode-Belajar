// kode JavaScript part 2

// function dengan banyak parameter
console.log("\n>> penggunaan parameter banyak : ")
function identitasSiswa(nama, kelas, jurusan){
    console.log(`-> perkenalkan nama saya adalah ${nama}, dari kelas ${kelas}, dan jurusan ${jurusan}.`)
}
let zaidan = identitasSiswa("zaidan","XI","RPL")


// function expression
console.log("\n>> function expression : ")
let hewan = function(namaHewan,habitat){
    console.log(`-> nama hewan : ${namaHewan}.`)
    console.log(`-> habitat hewan : ${habitat}.`)
}
console.log(`${hewan("ikan", "air")}`)
// kita bisa menyimpan function di dalam variable


// arrow function
console.log("\n>> arrow function : ")
let perkalian = (a,b) => a*b
console.log(`-> hasil dari perkalian a dan b adalah : ${perkalian(12,89)}`)
// arrow function ini adalah versi singkat dari function yang di mana cara ini lebi modern
// selengkapnya di dalam file Arrow-Function.js


// default parameter
console.log("\n>> default parameter")
function role(role = "warrior"){
    console.log(`-> hai pengunjung dengan role : ${role}`)
}
 role("assasin")
 role()


//  function yang memanggil function lain
console.log("\n>> function yang memanggil function lain")
function hasill(hasil){
    hasil * 10 / 3
    console.log(`-> hasil yang kamu peroleh ialah : ${hasil}`)
}
function pejumlahan(pejumlahan){
    let hasil = pejumlahan * 2
    return hasill(hasil) //<- <- ✅
}
pejumlahan(20)



// latihan

// menghitung luas persegi
console.log("\n Latihan 1 : ")
function luasPersegi(sisi){
    console.log(`-> hasil luas persegi adalah : ${sisi*sisi}`)
}
luasPersegi(12)


// meghitung luas persgi panjang
console.log("\n Latihan 2 : ")
function luasPersegiPanjang(panjang, lebar){
    console.log(`-> hasil luas persegi panjang adalah : ${panjang*lebar}`)
}
luasPersegiPanjang(17,89)

// mengitung diskon
console.log("\n Latihan 3 : ")
function hitungDiskon(harga, diskon){
    return harga - (1 - (diskon/100))
}
let harga = 200000
let diskon  = 20
let hasil2= hitungDiskon(harga,diskon)
console.log(`-> harga : ${harga}`)
console.log(`-> diskon : ${diskon}`)
console.log(`-> harga setelah diskon : ${hasil2}`)

// memberis salam kepada users
console.log("\n Latihan 4 : ")
let sayHell = (nama) => console.log(`-> hello ${nama}, apa kabar mu hari ini?`)

console.log("\n Latihan 5 : ")
function kalikan(kali){
     console.log(`-> hasilnya adalah : ${kali*3}`)
}
function tambahkan(a,b){
    let hasil = a + b
    kalikan(hasil)
}
tambahkan(2,10)