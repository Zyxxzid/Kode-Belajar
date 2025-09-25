// kode looping 

// perulangan for
console.log(">> for : ")
for(let i= 1; i <=10; i++){
    console.log(`-> nilai ke - ${i}`)
}
// for      : merupakan perintah salah satu loop di dalam JavaScript
// init     : merupakan inisialisasi variable/penamaan variable
// kondisi  : merupakan kondisi kapan perulangan berhenti
// update   : merupakan suatu perintah yang di lakukan di setiap perulangan


// perulangan while
console.log("\n>> while : ")
let data = 1
while(data <= 10){
    console.log(`-> data anda ke - ${data}`)
    data++
}
// while ini di pakai ketika kita tidak tau pasti perulangan ini berulang berapa kali, tetapi dia memiliki syarat untuk berhenti


// perulangan do while
console.log("\n>> do while : ")
let value = 1
do{
    console.log(`-> value ke - ${value}`)
    value++
}while(value <=10)
// do while ini hampir sama sama dengan while tetapi bedanya do while ini tetap berjalan meskipun sekali walaupun itu salah


// for pada array
console.log("\n>> for pada array : ")
let array = ["lala", "juju", "rebani", "gunawan"]
for(let index of array){
    console.log(`-> array  - ${index}`)
}
// for array ini di gunakan untuk mengulangi isi array atau string


// for objek
console.log("\n>> for objek")
let objek = {nama: "zaidan", umur: 16, hobi : "menggambar"}
for(let key in objek){
    console.log(`-> ${key} : ${objek[key]}`)
}
// for array di gunakan ketika mengulang propeti di dalam objek


// fungsi break
console.log("\n fungsi break : ")
for(let m  = 1; m <= 10; m++){
    if(m === 7)break
    console.log(`-> nilai : ${m}`)
}console.log("!! berhenti di 6 dan tidak melanjutkan ke nilai 7")
// break di gunakan untuk menghentikan perulangan


// fungsi continue
console.log("\n>> fungsi continue : ")
for(let n = 1; n <= 10 ; n++){
    if(n === 4){
        console.log("!! dia akan menskip nilai 4")
        continue
    }
    console.log(`-> nilai : ${n}`)
}
// continue ini di gunakan untuk menskip iterasi yang telah di tentukan lalu melanjutkan ke yang lain


// perulangan besarang (Nested Loop)
console.log("\n>> perulanga bersarang (Nested Loop) : ")
for(let j = 1; j <= 10; j++){
    for(let k = 1; k <= 10; k++){
        console.log(`perulang pertama : ${j}, perulangan ke dua : ${k}`)
    }
}
// loop bersarang ini di gunakan biasanya untuk di pakai di table dan di grid




// latihan 

// mengoutputkan 1 - 5
console.log("\n>> Latihan : ")
console.log("\n> Latihan 1 :")
for(let a = 1; a <= 10 ; a++){
    console.log(`-> data a : ${a}`)
}

// mengoutputkan nilai genap
console.log("\n> Latihan 2 : ")
for(let b = 2; b <= 10; b +=2){
    console.log(`-> data b : ${b}`)
}

// menjumlahkan semua nilai for
console.log("\n> Latihan 3 : ")
let d = 0
for(let c = 1; c <= 5; c++){
    d = d + c
}console.log(`-> nilai c dan d : ${d}`)

// membuat segitiga dari titik
console.log("\n> Latihan 4 : ")
let banyak = 10;
for(let f = 1; f <= banyak; f++){
    let tanda = ""
    for(let g = 1; g<=f; g++){
       tanda += "+"
    }console.log(`-> tanda : ${tanda}`)
}

// medeteksi nilai itu ganjil apa genap
console.log("\n Latihan 5 : ")
for(let l = 1; l <= 5; l++){
    let hasil = l%2 
    if( hasil == 0 ){
        console.log(`-> nilai ${l} = nilai ini genap`)
    }
    else{
        console.log(`-> nilai ${l} = nilai ini ganjil`)
    }
}