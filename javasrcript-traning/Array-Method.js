// kode Array Method

// Method Push()
console.log(">> method [Push()] : ")
let mobil = ["Lamborgini", "Ferrari", "BMW"]
mobil.push("Tesla") // [push()] adalah fungsi array untuk menambahkan items terakhir di array
console.log(`-> penambahan items di akhir mobil : [${mobil}]`)


// method pop()
console.log("\n>> method [pop()] : ")
mobil.pop() // [pop()] adalah fungsi dari array yang berfungsi menghapus items terakhir
console.log(`-> penghapusan items terakhir mobil : [${mobil}]`)


// method unshift()
console.log("\n>> method [unshif()] : ")
mobil.unshift("Tesla") // [unshift()] adalah fungsi array untuk menambahkan items terawal di array
console.log(`-> penambahan items di awal mobil : [${mobil}]`)


// method shift()
console.log("\n>> method shift() : ")
mobil.shift() // [shift()] adalah fungsi array untuk menghapus items terawal di array
console.log(`-> penghapusan items di awal mobil : [${mobil}]`)



// method forEach()
console.log("\n>> method forEach() : ")
mobil.forEach((item, index) => {
    console.log(`-> mobil ke-${index+1} : ${item}`)
})
//📝 pejelasan :
// [forEach()]  :   adalah nama fungsi/method untuk memanggil sekali untuk setiap items yang di milikinya
// [item]       :   adalah nama dari terisi di dalam array.
// [index]      :   adalah nama bilangan di array yang di awali dari 0.


// method map()
console.log("\n>> method map() : ")
let angka = [1,2,3,4,5,6,7,8,9,10]
let kali = angka.map((x) => x * 5)
console.log(`-> nilai array setelah di kalikan 5 adalah : ${kali}`)
//📝 pejelasan :
// [map()] mempunyai fungsi menghasilkan nilai baru tanpa mengubah nilai array yang asli
// digunakan ketika membuat array baru berdasarkan hasil memprosess setiap items yang ada


// method filter()
console.log("\n>> method filter() : ")
let angkaGenap = angka.filter((i) => i % 2 === 0)
console.log(`-> angka yang genap : ${angkaGenap}`)
//📝 pejelasan :
// [filter()] mempunyai fungsi sebagai kondisi seperti if tetapi ke array
// yang di mana hanya di ambil nilai truenya saja


// method find()
console.log("\n>> method find")
let cariAngka = angka.find((j) => j >= 3)
console.log(`-> mencari nilai 3 : ${cariAngka}`)
//📝 pejelasan :
// [find()] mempunyai fungsi menemukan nilai yang di minta
// yang di mana hanya menampilkan data pertama yang ketemu yang di tampilkan


// method reduce()
console.log("\n>> method reduce() : ")
let gabung = angka.reduce((total, b)=> total + b,0)
console.log(`-> hasil : ${gabung}`)
//📝 pejelasan :
// [reduce()] menggabungkan nilai menjadi satu contohnya (menjumlahkan)
// bukan hanya menjumlahkan kalikan juga bisa, atau menggabungkan string


// method sort()
console.log("\n>> method sort()")
let nilaiAcak = [1,9,2,6,4,3,6,10,5,21,8,3]
nilaiAcak.sort((a,b)=> a- b)
console.log(`-> nilai setelah di urutkan : ${nilaiAcak}`)
//📝 pejelasan :
// [sort()] seperti namanya sort yang artinya urut, yaitu mengurutkan sebuah nilai atau data di dalam array



// Latihan

// menampilkan nilai
console.log("\n>> Latihan 1 : ")
let value = [1,2,3,4,6,8,10]
let kali3 = value.map((c) => c * 3)
console.log(`-> hasil setelah di kalikan oleh 3 : ${kali3}`)

// mengambil nilai yang lebih besar dari 60
console.log("\n>> Latihan 2 : ")
let nilaiBebas = [12,87,92,78,29,49,22]
let lebihBesar60 = nilaiBebas.filter((f) => f >60)
console.log(`-> nilai yang di atas 60 : ${lebihBesar60}`)

// mencari nilai pertama yang lebih dari 80
console.log("\n>> Latihan 3 : ")
let cariNilai = [12,92,78,11,88,80]
let periksa = cariNilai.find((v) => v > 80)
console.log(`-> setelah di cari nilai yang lebih dari 80 : ${periksa}`)

// menambahkan semua nilai
console.log("\n>> Latihan 4 : ")
let isi = [5, 10, 15, 20, 25]
let jumlah = isi.reduce((hasil, d) => hasil + d,0)
console.log(`-> nilai setelah di jumlahkan semua : ${jumlah}`)

// mengurutkan nilai acak
console.log("\n>> Latihan 5 : ")
let contoh = [8, 1, 6, 3, 7, 2]
let susunTerkecil = contoh.sort((a,b) => a-b)
console.log(`-> nilai setelah di urutkan : ${susunTerkecil}`)