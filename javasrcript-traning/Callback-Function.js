// kode Callback Function

// 📝|penjelasan : 
// Callback function adalah function yang dikirim sebagai parameter ke function lain, lalu dipanggil di dalam function tersebut.

// ✒️|contoh :
function Zaidan (teman){
    console.log("zaidan : 'hai teman'.")
    teman() //
}
function Joko(){
    console.log("hai juga")
}
Zaidan(Joko)
//📝|penjelasan : 
// jadi function bernama Joko itu di masukan ke dalam parameter teman, lalu dari situ si Function zaidan bisa akses function Joko



// Callback anonim / langsung tulis di dalam parameternya
console.log("\n>> Callback Anonim : ")
Zaidan(() => console.log("-> teman : 'halo juga zaidan!!'"))

// Callback di Array method
console.log("\n>> Callback di Array method : ")
let angka = [1,2,3,4,5]
angka.map((b) => console.log(`-> ${b}`))

// 💡|Kenapa penting menggunakan Callback Function :
//    -> mengatur urutan eksekusi (dijalankan sesuatu setelah function selesai)
//    -> di pakai di event listener (klik,input,dll)
//    -> bikin kode lebih flexibel.



// Latihan
// buat pecakapan
console.log("\n>> Latihan 1 : ")
let selesaiBelajar = (Callback) =>{
    console.log("-> saya baru siap belajar")
    Callback()
}
selesaiBelajar(() => console.log("-> waktunya istirahat"))

