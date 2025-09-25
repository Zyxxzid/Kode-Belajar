// kode Arrow Function\
// 📝 penjelasan :
// "arrow function adalah sebuah function yang di tulis secara singkat, secara fungsional tetap sama dengan function biasa."


// bentuk dasar Arrow Function
// bentuk biasa function
function sapa(nama){
    console.log(`hai ${nama}`)
}
// lebih singkatnya!!
let sapa1 = (name) => console.log(`-> hai, ${name}`) //✅
sapa1("Zaidan")


// Arrow Function tanpa parameter
let kali = () => console.log(`-> halo semua!! `)

// array function di pakai di array method
let angka = [1,2,3,4,5]
let genap = angka.filter(x => x % 2 === 0) //✅
console.log(`-> nilai genap : ${genap}`)


// Latihan 
// buat text selamat pagi!
console.log("\n>> Latihan 1 : ")
let selamatPagi = () => console.log("-> selamat pagi, dunia tipu tipu!!!....")
selamatPagi()

// membuat program kuadrat
console.log("\n>> Latihan 2 : ")
let kuadrat = (nilai) => nilai * nilai
console.log(`nilai kuadrat adalah : ${kuadrat(25)}`)

// mengkalikan nilai array
console.log("\n>> Latihan 3 : ")
let kalikan = angka.map(c => c * 10)
console.log(`-> hasil setelah di kalikan oleh 10 adalah : ${kalikan} `)

// tambahkan 
console.log("\n>> Latihan 4 : ")
let tambah = (a,b) => a+b
console.log(`-> hasil setalah di tambah : ${tambah(20,1827)}`)