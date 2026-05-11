// ALISTIRMA 1
// Asagidaki fonksiyonun icinde 'meslek' degiskenini tanimla.
// Fonksiyon icinde console.log ile yazdir.
// Sonra fonksiyonun DISINDA da console.log ile yazmaya calis.
// Ne olduğunu gozlemle ve yorum satirina yaz.
//
// Beklenen:
//   fonksiyon icinde -> "developer"
//   fonksiyon disinda -> ReferenceError (ya da hata aciklamasi)

function meslekGoster() {
    let meslek= "Developer"
    console.log(meslek)
 
}
meslekGoster();
// console.log(meslek); // ReferenceError

// ALISTIRMA 2
// Asagidaki kod ne cikti verir? Once TAHMİN et, yorum olarak yaz.
// Sonra calistir ve tahminini kontrol et.
// Yanlis tahmin ettiysen NEDEN yanlis oldugunu da yaz.
 
function disfonk() {
  const dis = "dis scope";
 
  function icfonk() {
    const ic = "ic scope";
    console.log(dis); // TAHMINIM: dis scope
    console.log(ic);  // TAHMINIM: ic scope
  }
 
  icfonk();
  // console.log(ic); // Bu ne verir? Hata
}
 
disfonk();

// ALISTIRMA 3
// Asagidaki dongu var ve let kullaniliyor.
// Ciktinin ne olacagini tahmin et, sonra calistir.
// Sonra let'i var ile degistir -- cikti nasil degisti? Neden?
// Her iki davranisi da yorum olarak acikla.
 
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log("dongu:", i);
  }, i * 100);
}
 
// let ile tahminim: 1,2,3
// var ile tahminim: 4,4,4
// Fark neden oluyor: var function scope olduğundan

// ALISTIRMA 4
// carpanOlustur adinda bir fonksiyon yaz.
// Bir sayi alsın (carpan).
// İcinde baska bir sayi alan ve onu carpanla carpan bir fonksiyon dondurun.
//
// Kullanim:
//   const ikiyle = carpanOlustur(2);
//   const besle  = carpanOlustur(5);
//   console.log(ikiyle(4));  // 8
//   console.log(ikiyle(10)); // 20
//   console.log(besle(3));   // 15
 
function carpanOlustur(carpan) {
  function carp(sayi){
    return carpan*sayi;
  }
 return carp;
}
 
const ikiyle = carpanOlustur(2);
const besle  = carpanOlustur(5);
console.log(ikiyle(4));  // 8
console.log(ikiyle(10)); // 20
console.log(besle(3));   // 15


// ALISTIRMA 5
// Bir "ozel hesap" sistemi yap.
// bakiyeHesabi() fonksiyonu cagrilinca bir obje donecek.
// O objenin 3 metodu olacak: yatir(miktar), cek(miktar), bakiye()
// Bakiye disaridan DIREKT erisilemesin -- sadece metodlar uzerinden.
//
// Kullanim:
//   const hesap = bakiyeHesabi();
//   hesap.yatir(1000);
//   hesap.yatir(500);
//   hesap.cek(200);
//   console.log(hesap.bakiye()); // 1300
//   console.log(hesap._bakiye);  // undefined -- disaridan erisemesin
 
function bakiyeHesabi() {
  // Kodunu buraya yaz
  // Ipucu: let bakiye = 0 tanimla, metodlar bunu closure ile kullancak
 
 let bakiye = 0
  return {
    yatir: function(miktar){
        bakiye += miktar; 
    },
    cek: function(miktar){
        bakiye -= miktar; 
    },
    bakiye: function(){   
        return bakiye;    
    }
  }
    
}
 
const hesap = bakiyeHesabi();
hesap.yatir(1000);
hesap.yatir(500);
hesap.cek(200);
console.log(hesap.bakiye()); // 1300
console.log(hesap._bakiye);  // undefined

// ALISTIRMA 6
// Asagidaki kodu tamamla.
// hatalogla() her cagrildiginda kac kez cagrildigini HATIRLAMALI.
// Dis koddan bu sayiya erisememeli.
//
// Beklenen:
//   hatalogla("Baglanti kesildi");    -> "[1] Hata: Baglanti kesildi"
//   hatalogla("Sunucu cevap vermedi") -> "[2] Hata: Sunucu cevap vermedi"
//   hatalogla("Zaman asimi");         -> "[3] Hata: Zaman asimi"
 
const hatalogla = (function() {
  let sayac = 0;

  return function(mesaj) {
    sayac++;
    console.log(`[${sayac}] Hata: ${mesaj}`);
  };
})();

hatalogla("Baglanti kesildi");
hatalogla("Sunucu cevap vermedi");
hatalogla("Zaman asimi");

// ALISTIRMA 7 -- 
// Asagidaki kodu calistirmadan ciktisini tahmin et.
// Her satiri sirasıyla acikla.
 
var x = 1;
 
function test() {
  console.log(x); // (A) ne cikti verir?
  var x = 2;
  console.log(x); // (B) ne cikti verir?
}
 
test();
console.log(x);   // (C) ne cikti verir?
 
// (A) Tahminim ve aciklamam: UNDEFINED HOISTING
// (B) Tahminim ve aciklamam: 2
// (C) Tahminim ve aciklamam: 1

