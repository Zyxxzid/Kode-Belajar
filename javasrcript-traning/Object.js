// kode Object

// pambuatan Object
console.log(">> penulisan Object : ")
let identitasUsers = {      // identitasUser = nama Object
    nama : "Zaidan",        // nama, kelas, alamat = key/propety dari Object
    kelas : "XI RPL 1",     // "zaidan", "XI RPL 1", "GG.Tawom" = value Object
    alamat : "GG.Tawon"
}
// atau bisa di buat seperti ini [ let identitasUsers = {nama : "zaidan", kelas : " XI RPL 1", alamat : "GG.Tawon"}] -> supaya lebih rapi dan gampang
//  Object itu adalah ibaratkan sebuah pembungkus/ kotang yang dapat memuat beberapa propety di dalamnya.

// cara mengakses Object
console.log(identitasUsers.nama) // Pertama memanggil nama Object baru di berikan tanda titik sebagai pemanggilan propety di dalamnya


// penambahan propety
console.log("\n>> penambahan propety : ")
identitasUsers.umur = "16th" // <<✅
console.log(identitasUsers.umur)

// mengubah property
console.log("\n>> pengubahan propety : ")
identitasUsers.kelas = "11 RPL 1"
console.log(identitasUsers.kelas)

// menghapus propery
console.log("\n>> penghapussan propety : ")
delete identitasUsers.alamat
console.log(identitasUsers.alamat) // akan menghasilkan undefined karena nilai tersebut kosong

// menggabungkan function ke dalam Object
console.log("\n>> function di dalam Object : ")
let sekolah = {
    namaSekolah : "SMP Desta",
    promosiSekolah : function(){
        console.log(`-> hai teman teman, sekarang di ${this.namaSekolah} lagi ngadain pendaftaran ayo buruan daftar!! `)
    }
}
console.log(sekolah.promosiSekolah())

// Object dengan Loop
console.log("\n>> Loop Object : ")
let makan ={
    makanan1 : "bakso",
    makanan2 : "mie ayam",
    makanan3 : "ayam goreng",
    makanan4 : "ayam bakar"
}
for(let key in makan){
    console.log(`-> seluruh data dari makanan : ${makan[key]}`)
}
// [key] itu berisi nama dari propety di dalam object (makanan1, makanan2, makanan3, makanan4)
// [makan[key]] itu akan memberikan isi value dari propety
//  ini sangat cocok ketika kita ingin menampilakan semua tanpa mengetik satu demi satu






// nested Object
console.log("\n")
console.log("\n>> Nested Object : ")
let siswa = {
    nama : "Zaidan Rezkyando",
    umur : "16th",
    alamat : {
        negara : "indonesia",
        provinsi : "Sumatra Utara",
        kabupaten : "Deli Serdang",
        Kota : "Medan",
        kecamatan : "Percut Sei tuan",
        rumah : "GG.Tawon Dusun 16"
    }
}
console.log(`-> nama siswa : ${siswa.nama}`)
console.log(`-> umur siswa : ${siswa.umur}`)
// pemanggila nested object //
console.log(`-> alamat siswa : ${siswa.alamat.negara}`)
console.log(`          -> : ${siswa.alamat.provinsi}`)
console.log(`          -> : ${siswa.alamat.kabupaten}`)
console.log(`          -> : ${siswa.alamat.Kota}`)
console.log(`          -> : ${siswa.alamat.kecamatan}`)
console.log(`          -> : ${siswa.alamat.rumah}`)
// [siswa] adalah penamaan dari object.
// [alamat] adalah penamaan dari nested Object

// mengubah nilai dari nested object
console.log("\n>> mengubah nilai dari Nested Object : ")
let hewan = {
    namaHewan : "kucing",
    ciriCiriHewan : {
        bulu : "hitam, kuning, coklat",
        jenisKelamin : "Jantan"
    }
}
hewan.ciriCiriHewan.jenisKelamin = "Betina"
console.log(`-> nama hewan : ${hewan.namaHewan}
    -> ciri - ciri hewan : > warna : ${hewan.ciriCiriHewan.bulu}
    > jenis Kelamin : ${hewan.ciriCiriHewan.jenisKelamin}`)

    // menambahkan propety nestd Object
    console.log("\n>> menambahkan proprty Nested Object : ")
    hewan.ciriCiriHewan.ras = "persia"
    console.log(`-> ras hewan : ${hewan.ciriCiriHewan.ras}`)

// nested Object dengan Array
console.log("\n>> Nested Object dengan Array :")
let daftarAnggota = {
    namaPerusahaan : "Jendral Mantap",
    anggota : [
        {nama : "Joko Laksmana", JenisKelamin : "Laki-Laki"},
        {nama : "Dewi imana Putri", JenisKelamin : "Perempuan"},
        {nama : "Distano Herman", JenisKelamin : "Laki-Laki"}
    ]
}
console.log(`-> nama perusahaan : ${daftarAnggota.namaPerusahaan}`)
console.log(`-> nama Anggota : ${daftarAnggota.anggota[1].nama}`)

// loop di dalam Nested Object
console.log("\n>> Loop di dalam Nested Object")
console.log(`> daftar seluruh anggota : `)
for(let i of daftarAnggota.anggota){
    console.log(`-> anggota : ${i.nama} - ${i.JenisKelamin}`)
}

// fungsi dari Nestes Object
//  1. banyak data modern (JSON) bentuknya Nested Object
//  2. di pakai saat mengambil API atau database
//  3. berguna untuk menyimpan data kompleks seperti (users, produk, alamat, riwayat pembelian, dll).



// latihan

// tampilkan data
console.log("\n>> Latihan 1 : ")
let pegawai = {
    biodataPegawai : {
        nama : "Hendra",
        umur : "24th",
        alamat : "JL.Jumaidi"
    }
}
console.log(`-> nama : ${pegawai.biodataPegawai.nama}`)
console.log(`-> alamat : ${pegawai.biodataPegawai.alamat}`)

// Nested Object + Array
console.log("\n>> Latihan 2 :  ")
let toko = {
    namaToko : "toko Mbak Juni",
    produk : [
        {nama : "Mie Ayam", harga : "Rp.12.000"},
        {nama : "Bakso Mercon", harga : "Rp.12.000"},
        {nama : "Pangsit Jumbo", harga : "Rp.12.000"},
        {nama : "Bakso Ayam Lava", harga : "Rp.15.000"}
    ]
}
console.log(`selamat data di Toko ${toko.namaToko}`)
console.log("==============< menu >==============")
console.log(`-> nama : ${toko.produk[0].nama} => ${toko.produk[0].harga}`)
console.log(`-> nama : ${toko.produk[1].nama} => ${toko.produk[1].harga}`)
console.log(`-> nama : ${toko.produk[2].nama} => ${toko.produk[2].harga}`)
console.log(`-> nama : ${toko.produk[3].nama} => ${toko.produk[3].harga}`)
