// ============================================================
// HAFTA 2 - SALI
// Konu: Callback, Callback Hell, Promise
// ============================================================
// Nasil kullanilir:
//   node sali.js
// Her aliştirmanin altindaki bosluga kodunu yaz.
// Beklenen ciktiyi yorum satirinda veriyorum.
// ============================================================


// ─────────────────────────────────────────────────────────────
// BOLUM 1: CALLBACK
// ─────────────────────────────────────────────────────────────

// ALISTIRMA 1
// islemYap adinda bir fonksiyon yaz.
// Iki sayi ve bir callback alsin.
// Iki sayiyi toplasin, sonucu callback'e versin.
//
// Beklenen:
//   islemYap(5, 3, (sonuc) => console.log(sonuc)); // 8
//   islemYap(10, 7, (sonuc) => console.log(sonuc)); // 17

function islemYap(a, b, callback) {
  // Kodunu buraya yaz
    let toplam =  a+b
    callback(toplam)
}

islemYap(5, 3, (sonuc) => console.log(sonuc));   // 8
islemYap(10, 7, (sonuc) => console.log(sonuc));  // 17


// ─────────────────────────────────────────────────────────────

// ALISTIRMA 2
// Asagidaki kodu calistirmadan ciktisini tahmin et.
// Sonra calistir ve kontrol et.
// Yanlis tahmin ettiysen NEDEN oldugunu yorum olarak yaz.

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

setTimeout(() => {
  console.log("D");
}, 100);

console.log("E");

// Tahminim (sirayla): A,C,E,B,D
// Neden bu sirayla:


// ─────────────────────────────────────────────────────────────

// ALISTIRMA 3
// bekleVeYazdir adinda bir fonksiyon yaz.
// Bir mesaj ve bir sure (ms) alsin.
// O sure kadar bekledikten sonra mesaji yazdiracak bir callback kullancak.
// Fonksiyonu 3 kez farkli sürelerle cagir.
//
// Beklenen (yaklasik 1sn sonra ucü de yazılmis olmali):
//   500ms sonra  -> "Merhaba"
//   1000ms sonra -> "Nasılsin"
//   1500ms sonra -> "Gorusuruz"

function bekleVeYazdir(mesaj, sure) {
  // Kodunu buraya yaz
    setTimeout(() => console.log(mesaj),sure)
}

bekleVeYazdir("Merhaba", 500);
bekleVeYazdir("Nasilsin", 1000);
bekleVeYazdir("Gorusuruz", 1500);


// ─────────────────────────────────────────────────────────────

// ALISTIRMA 4
// Asagida callback kullanan bir fonksiyon var.
// Bu fonksiyonu cagirip sonucu konsola yaz.
// Sonra ayni islemi arrow function syntax ile yaz.

function veriGetir(id, callback) {
  const veriler = {
    1: { isim: "Ali", yas: 22 },
    2: { isim: "Veli", yas: 30 },
    3: { isim: "Ayse", yas: 25 },
  };
  const sonuc = veriler[id] || null;
  callback(sonuc);
}

// Normal function ile cagir:
veriGetir(1, function(kullanici) {
  // Kodunu buraya yaz
    console.log(kullanici)
});

// Arrow function ile cagir:
veriGetir(2, (kullanici) => {
  // Kodunu buraya yaz
    console.log(kullanici)
});

// id 99 (olmayan) icin cagir, null durumunu handle et:
veriGetir(99, (kullanici) => {
  // Kodunu buraya yaz -- kullanici null gelecek
    if(kullanici === null){
        console.log("Hatalı id")
    }
});


// ─────────────────────────────────────────────────────────────
// BOLUM 2: CALLBACK HELL
// ─────────────────────────────────────────────────────────────

// ALISTIRMA 5
// Asagida 3 sahte async fonksiyon var (setTimeout ile simule ediliyor).
// Bunlari dogru sirada cagir:
//   1. once kullaniciyiGetir(1, callback)
//   2. sonucu kullanarak siparisleriGetir(kullanici.id, callback)
//   3. sonucu kullanarak toplaminHesapla(siparisler, callback)
//   4. en sonda toplami yazdir
//
// Beklenen son cikti: "Ali'nin toplam siparis tutari: 1250"
// (Ara ciktilar da gorunecek)

function kullaniciyiGetir(id, callback) {
  setTimeout(() => {
    console.log("Kullanici alindi");
    callback({ id: id, isim: "Ali" });
  }, 300);
}

function siparisleriGetir(kullaniciId, callback) {
  setTimeout(() => {
    console.log("Siparisler alindi");
    callback([
      { urun: "Laptop", fiyat: 1000 },
      { urun: "Mouse",  fiyat: 250  },
    ]);
  }, 300);
}

function toplaminHesapla(siparisler, callback) {
  setTimeout(() => {
    const toplam = siparisler.reduce((t, s) => t + s.fiyat, 0);
    console.log("Toplam hesaplandi");
    callback(toplam);
  }, 300);
}

// Kodunu buraya yaz -- callback hell yapisi olusacak:
kullaniciyiGetir(1, (kullanici) => {
  // Devamini yaz...
  siparisleriGetir(kullanici.id, (siparisler) => {
    toplaminHesapla(siparisler, (toplam) => {
      console.log(`${kullanici.isim}'nin toplam siparis tutari: ${toplam}`);
    });
  });
});


// ─────────────────────────────────────────────────────────────
// BOLUM 3: PROMISE
// ─────────────────────────────────────────────────────────────

// ALISTIRMA 6
// Asagidaki fonksiyonu tamamla.
// sayi 0'dan buyukse resolve et ("Pozitif sayi: X"),
// degilse reject et ("Hata: sayi pozitif olmali").
//
// Beklenen:
//   sayiyiKontrolEt(5)  -> "Pozitif sayi: 5"
//   sayiyiKontrolEt(-3) -> "Hata: sayi pozitif olmali"

function sayiyiKontrolEt(sayi) {
  return new Promise((resolve, reject) => {
    // Kodunu buraya yaz
    if(sayi > 0){
        resolve(`Pozitif sayi:  ${sayi}`)
    } else {
    reject("Hata sayi pozitif olmali")}
  });
}

sayiyiKontrolEt(5)
  .then(mesaj => console.log(mesaj))
  .catch(hata => console.log(hata));

sayiyiKontrolEt(-3)
  .then(mesaj => console.log(mesaj))
  .catch(hata => console.log(hata));


// ─────────────────────────────────────────────────────────────

// ALISTIRMA 7
// Asagidaki Promise zincirini tamamla.
// Her .then() bir oncekinin sonucunu alip donusturecek.
//
// Baslangic: 3
// 1. adim: sayiyi 2 ile carp      -> 6
// 2. adim: sonuca 10 ekle         -> 16
// 3. adim: "Sonuc: X" stringi yap -> "Sonuc: 16"
// 4. adim: console.log ile yazdir
//
// Beklenen: "Sonuc: 16"

Promise.resolve(3)
  .then(sayi => {
    // Kodunu buraya yaz -- 2 ile carp ve dondur
    return sayi*2;
  })
  .then(sayi => {
    // Kodunu buraya yaz -- 10 ekle ve dondur
    return sayi+10;
  })
  .then(sayi => {
    // Kodunu buraya yaz -- "Sonuc: X" stringi dondur
    return `Sonuc : ${sayi}`
  })
  .then(mesaj => console.log(mesaj)); // "Sonuc: 16"


// ─────────────────────────────────────────────────────────────

// ALISTIRMA 8
// Alistirma 5'teki callback hell kodunu Promise ile yeniden yaz.
// Ayni 3 fonksiyonu ama bu sefer Promise donduren versiyonunu yaz.
// Sonra .then() zinciriyle cagir.
//
// Ipucu:
//   function kullaniciyiGetirP(id) {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve({ id, isim: "Ali" }), 300);
//     });
//   }

// Promise versiyonlarini yaz:
function kullaniciyiGetirP(id) {
  // Kodunu buraya yaz
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Kullanici alindi");
      resolve({ id, isim: "Ali" });
    }, 300);
  });
}

function siparisleriGetirP(kullaniciId) {
  // Kodunu buraya yaz
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Siparisler alindi");
      resolve([
        { urun: "Laptop", fiyat: 1000 },
        { urun: "Mouse", fiyat: 250 },
      ]);
    }, 300);
  });
}

function toplaminHesaplaP(siparisler) {
  // Kodunu buraya yaz
  return new Promise((resolve) => {
    setTimeout(() => {
      const toplam = siparisler.reduce((t, s) => t + s.fiyat, 0);
      console.log("Toplam hesaplandi");
      resolve(toplam);
    }, 300);
  });
}

// .then() zinciri ile cagir:
kullaniciyiGetirP(1)
  .then((kullanici) => siparisleriGetirP(kullanici.id))
  .then((siparisler) => toplaminHesaplaP(siparisler))
  .then((toplam) => {
    console.log(`Ali'nin toplam siparis tutari: ${toplam}`);
  });


// ─────────────────────────────────────────────────────────────

// ALISTIRMA 9 -- BONUS
// Asagida bazen hata fırlatan bir Promise var.
// .then() ve .catch() ile hem basarili hem basarisiz durumu handle et.
// .finally() ile her durumda "Islem tamamlandi" yazdir.
//
// Beklenen (rastgele):
//   Basarili: "Veri: { id: 1, isim: 'Ali' }"
//             "Islem tamamlandi"
//   Basarisiz:"Hata yakalandi: Sunucu mesgul"
//             "Islem tamamlandi"

function riskliIslem() {
  return new Promise((resolve, reject) => {
    const basarili = Math.random() > 0.5;
    setTimeout(() => {
      if (basarili) {
        resolve({ id: 1, isim: "Ali" });
      } else {
        reject(new Error("Sunucu mesgul"));
      }
    }, 500);
  });
}

// Kodunu buraya yaz:
riskliIslem()
  // .then(...)
  // .catch(...)
  // .finally(...)
  .then((veri) => console.log("Veri:", veri))
  .catch((err) => console.log(`Hata yakalandi: ${err.message}`))
  .finally(() => console.log("Islem tamamlandi"));

// ─────────────────────────────────────────────────────────────
// GUNUN OZETI
// ─────────────────────────────────────────────────────────────
// Bu dosyayi bitirdikten sonra asagidaki sorulara cevap ver:
//
// 1. Callback ve Promise arasindaki temel fark ne?
//    Kendi cumlelerinle acikla.
//
// 2. Callback hell neden kotudur?
//    Promise bunu nasil cozer?
//
// 3. .then() neden her seferinde yeni bir Promise donderir?
//    Bu ne ise yariyor?
//
// Cevaplarini asagiya yaz: