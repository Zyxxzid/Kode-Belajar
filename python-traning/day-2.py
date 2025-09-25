print("====< selamat datang di dalam program kondisi >====")

a = input("\nMasukan nama anda : ")
b = int(input("masukan umur anda : "))
print("\nprogram akan menseleksi umur anda apakah anda lulus untuk menaiki wahana ini !!")

if(b < 0):
    print("\ninputan yang anda masukan tidak kompetibel")
else:
    if(b >= 15):
        print("\nanda memiliki umur yang pas untuk wahana ini, silakan naik dan selamat bersenang senang")
    elif(b <=14):
        print("\numur anda kurang kompetibel untuk menaiki wahana ini, silakn cari wahana yang pantas untuk anda")
    elif(b >= 60):
            print("\nmaaf anda tidak bisa menaiki wahana ini di sebabkan anda memiliki usia yang rawan serangan jantung")
    else:
        print("\numur anda tidak valid")