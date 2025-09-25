// kode Destructuring And Spread Operator

// Array Destructuring
console.log("\n>> Array Destruturing : ")
let Array = [1,2,3]
let [a,b,c] = Array
console.log(`-> nilai index Array : ${[a,b,c]}`)
//📝 pejelasan :
// menuliskan array secara cepat / menampilkan array dengan cepat

// Object Destruturing
console.log("\n>> Object Destruturing : ")
let Objec = {nama : "zaidan", umur : "16th"}
let {nama, umur} = Objec
console.log(`-> perkenalkan nama saya adalah : ${nama}, dan umur saya : ${umur}`)
//📝 pejelasan :
// menuliskan Object secara cepat / menampilkan array dengan cepat

// spread Operator
// array
console.log("\n>> Spread Operator Array : ")
let arry = [1,2,3,4,5]
let arr = [...arry,6,7]
console.log(`-> Nilai Array : ${arr}`)

// Object
console.log("\n>> Spread Operator Object : ")
let obj1 = {nilai1 : 1, nilai2 : 2}
let obj2 = {...obj1,nilai3 : 3}
console.log(`-> semua Object : ${obj2}`)
//📝 pejelasan :
// meduplikasi / mengabungkan Array atau Object 


    // Latihan
    // latihan array destruturing
    console.log("\n>> Latihan 1 : ")
    let angka = [100,200,300]
    let [y,,u] = angka
    console.log(`-> nilai angka yang : ${[y,u]}`)

    // Latihan Object destruturing
    console.log("\n>> Latihan 2 : ")
    let buku = {namaBuku : "Laskar Pelangi ", penulis : "Andrea Hirata", tahun : 2005}
    let {namaBuku, tahun } = buku
    console.log(`-> nama buku : ${namaBuku}, tahun keluaran : ${tahun}`)

    // Latihan Spread array
    console.log("\n>> Latihan 3 : ")
    let array1 = [1,2]
    let array2 = [...array1,3,4]
    console.log(`-> nilai array setelah di gabungkan : ${array2}`)


    // Latihan Spread Object
    console.log("\n>> Latihan 4 : ")
    let data1 = {nama : "joko", umur : 17}
    let dataTambahan = {...data1,sekolah : "SMK Uzumaki"}
    console.log(`-> nama : ${dataTambahan.nama}`)
    console.log(`-> umur : ${dataTambahan.umur}`)
    console.log(`-> sekolah : ${dataTambahan.sekolah}`)