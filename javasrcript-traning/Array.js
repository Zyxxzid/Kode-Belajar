// kode Array

// array adalah wadah penyimpanan banyak data sekaligus di dalam 1 variable
let nama = "Joko"
let umur = 25
let hobi = "melukis"
// dari pada seperti ini mending buat seperti di bawah ini
let joko = ["Joko Purnawan", 26, "melukis"] //✅

// cara memanggil array
let zidan = ["Zaidan Rezkyando", 16, "menggambar"]
console.log(`nama : ${zidan[0]}`)   // di array ada namanya index, index itu sebuah bilangan bulat dari 0, dan cara 
                                    // pemanggilan array itu menggunakan index yang sesuai dengan posisi indexnya.
                                    // [0,1,2,3,4,5,6,..]


// latihan
// buat array berisi 5 angkalalu tampikan semua pakau loop
console.log("\n Latihan 1 : ")
let angka = [1,2,3,4,5]
for(let i of angka){
    console.log(`-> angka : ${i}`)
}

// hitung semua array lalu tampikan hasilnya
console.log("\n Latihan 2 : ")
let hitungArray = [1,2,3,4,5,6,7,8,9,10]
let hasil = 0
for(let i of hitungArray){
    hasil += i
}console.log(`-> hasil : ${hasil}`)


// medeteksi nilai genap
console.log("\n Latihan 3 : ")
let angkaGenap = [1,2,3,4,5,6,7,8,9,10]
let nilaiGenap = 0
for(let j = 0; j < angkaGenap.length; j++){
    if(angkaGenap[j] % 2 == 0){
        console.log(`-> nilai genap : ${angkaGenap[j]}`)
    }
}

// outputkan nama teman
console.log("\n Latihan 4 : ")
let teman = [ "Nimbrung", "Sejeko", "Umar", "Joko"]
for(let g= 0; g < teman.length ; g++){
    console.log(`-> teman ke ${g+1} : ${teman[g]}`)
}