let identitasSiswa = [
    {nama :"Jumia", nilai : 98, kelas: "XI"},
    {nama :"Herdayanto", nilai : 100, kelas: "XII"},
    {nama :"Deyren", nilai : 80, kelas: "X"},
    {nama :"Siti", nilai : 50, kelas: "XI"},
    {nama :"Juni", nilai : 86, kelas: "XII"},
    {nama :"Joko", nilai : 82, kelas: "XI"},
    {nama :"Sita", nilai : 100, kelas: "XI"}
]

let seluruhSiswa = identitasSiswa.forEach((a) => console.log(`-> nama : ${a.nama} || nilai : ${a.nilai} || kelas : ${a.kelas}`))


// hitung rata rata nilai siswa
let hitungRataRata = identitasSiswa.reduce((total, siswa) => total + siswa.nilai,0 )
let hasil = hitungRataRata / identitasSiswa.length


// mengkondisikan siswa yang lulus 
let lulus = identitasSiswa.filter((c) => c.nilai >= 70)


// urutkan nilai paling tinggi
let urutkanNilaiSiswa = identitasSiswa.sort((d,e) => e.nilai-d.nilai )




console.log("\n Memperoses data siswa!!")
function rangkuman(){
    console.log(`-> rata rata siswa : ${hasil.toFixed(2)}`)
    console.log(`-> siswa yang lulus : ${lulus.map(s => s.nama).join(", ")}`)
    console.log(`-> nilai paling tinggi : ${urutkanNilaiSiswa[0].nilai}  (${urutkanNilaiSiswa[0].nama}) (${urutkanNilaiSiswa[0].kelas   })`)
}
rangkuman()