/*
async bir fonksiyon yaz
https://jsonplaceholder.typicode.com/users adresine fetch ile istek at
Gelen cevabı .json() ile parse et
Tüm bunları try/catch bloğuna sar, hata durumunu yönet


✅ Alıştırma 2: Kullanıcı Listesini map ile Console'a Yazdırma
Kullanacakların: array.map()
Yapman gerekenler:

API'den gelen kullanıcı dizisini map ile döngüye al
Her kullanıcının name ve email bilgisini console.log ile yazdır
*/
/*
async function deneme(){
   
   try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    data.map((k) => console.log(k.name))
    } catch(error){
        console.log(error)
    }
} */



async function deneme2(){
   
   try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.table(data.map(k => ({ name: k.name, email: k.email })))
    const user =(data.find((k) => k.id === 3 )) // id'si 3 olan kullanıcıyı find ile bul ve yazdır
    console.log(user?.name)
    const southElv = data
    .filter(k => k.address.city === "South Elvis")
    .map(k => ({name: k.name , city : k.address.city})) // address.city'si "South Elvis" olan kullanıcıları filtrele

    console.log(southElv)
    } catch(error){
        console.log(error)
    }
}

deneme2()
// /users ve /posts endpoint'lerine aynı anda istek at
// Promise.all kullan
async function deneme3() { 
try{
const [usersRes, postsRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/posts")
])

const [users,posts] = await Promise.all([
    usersRes.json(),
    postsRes.json(),   
])
console.log(users.length, posts.length)
} catch(error){
    console.log(error)
}


}

deneme3()

// Bir sayaç fonksiyonu yaz
// Her çağrıldığında bir artırsın
// Dışarıdan sayac değişkenine erişilemesin

const sayac = (() => {
  let deger = 0
  return () => {
    deger += 1
    return deger
  }
})()

console.log(sayac()) // 1
console.log(sayac()) // 2
console.log(sayac()) // 3

