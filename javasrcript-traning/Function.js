// kode function

// penggunaan function
console.log("\n>> penggunaan function : ")
function salam(){
    console.log("-> hai perkenalkan nama aku adalah zaidan rezkyando!")
} 
// function adalah kumpulan blok kode yang di bungkus dalam suatu perintah untuk mempermudah kodingan
salam()// pemanggilan function✅.


// parameter dalam function
console.log("\n>> parameter dalam function : ")
function identitas(nama){
    console.log(`halo ${nama} selamat datang di dalam program!`)
}
identitas("zaidan")
identitas("lagoogo")
// parameter itu adalah variable yang di letakan di dalam function.

// function dengan return
console.log("\n>> retrun di function : ")
function Perjumlahan(nilai1,nilai2){
    return nilai1 + nilai2
}
let hasil = Perjumlahan(12,16)
console.log(`-> hasil : ${hasil}`)
// retrun adalah mengembalikan nilai/data ke tempat asalnya.


// function dengan loop
console.log("\n>> for di dalam function : ")
function Loop(Perulangan){
    for(let i = 0 ; i < Perulangan.length; i++){
        console.log(`-> index : ${i} : ${Perulangan[i]}`)
    }
}
let value = [1,2,3,4,5]
Loop(value)
// Function sangat berguna untuk mengelola loop supaya kode tidak berulang.


// latihan 
// ucapan selamat pagi
 console.log("\n>> latihan 1 : ")
 function selamatPagi(){
    console.log("hai, selamat pagi!")
 }
selamatPagi()

// perkalian 
console.log("\n>> latihan 2 : ")
function perkalian(kali){
    return kali * 2
}
let hasil2 = perkalian(12)
console.log(`-> hasil perkalian : ${hasil2}`)

// membuat perulangan hingga nilai n
console.log("\n>> latihan 3 : ")
function ulang(n){
    for(let m =1; m <= n; m++){
        console.log(`-> perulangan ke : ${m}`)
    }
}
ulang(12)


//menjumlakkan semua isi array
console.log("\n Latihan 4 : ")
let hasil1 = 0 
function jumlahArray(arr){
    for(let y= 0; y < arr.length; y++){
        hasil1 += arr[y]
    }return hasil1
}
let nilai3 = [1,2,3,4,5]
let akhir1 = jumlahArray(nilai3)
console.log(`-> nilai akhir adaah : ${akhir1}`)