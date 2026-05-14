// ALISTIRMA 1
// sayiKontrol adinda bir fonksiyon yaz.
// Parametre olarak bir sayi alsin ve bir Promise dondursun.
// Eger sayi 10'dan buyukse promise resolve olsun ("Sayi 10'dan buyuk").
// Degilse reject olsun ("Sayi 10 veya daha kucuk").
// Fonksiyonu cagirip then ve catch ile sonuclari konsola yazdir.

function sayiKontrol(sayi) {
  return new Promise((resolve, reject) => {
    if (sayi > 10) {
      resolve("Sayi 10'dan buyuk");
    } else {
      reject("Sayi 10 veya daha kucuk");
    }
  });
}

sayiKontrol(15)
  .then((mesaj) => console.log(mesaj))
  .catch((hata) => console.log(hata));

sayiKontrol(5)
  .then((mesaj) => console.log(mesaj))
  .catch((hata) => console.log(hata));


// ─────────────────────────────────────────────────────────────

// ALISTIRMA 2
// Asagidaki kodu calistirmadan ciktisini tahmin et.
// Sonra ciktinin boyle olmasinin sebebini acikla.


console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");


// Tahminim (sirayla): 1, 4, 3, 2
// Neden: 1 ve 4 senkron kod oldugu icin aninda bitiriyor isi. Promise'ler microtask kuyruguna girdiginden setTimeout gibi macrotasklardan daha once event loopa giriyor. o yuzden once 3 sonra 2 gelir.


// ─────────────────────────────────────────────────────────────

// ALISTIRMA 3
// kullaniciGetir adinda id alip promise donduren bi yapi var.
// bunlari then() zinciriyle cagirip id 1 ve 2 yi pespese yazdir.

function kullaniciGetir(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, isim: `Kullanici ${id}` });
    }, 500);
  });
}

// 1. yi cagir, ismini yazdir, sonra return ile 2.yi cagirip onu da yazdir.
kullaniciGetir(1)
  .then(kullanici1 => {
    console.log(kullanici1.isim);
    return kullaniciGetir(2);
  })
  .then(kullanici2 => {
    console.log(kullanici2.isim);
  });
