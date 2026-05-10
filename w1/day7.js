const kullanicilar = [
{
    id: 1,
  isim: "Ali",
  yas: 22,
  aktif: true,
  adres: "İstanbul",
  maas: 20
},
{
    id: 2,
  isim: "Mehmet",
  yas: 42,
  aktif: false,
  adres: "İstanbul",
  maas: 20
},
{
    id: 3,
  isim: "Can",
  yas: 32,
  aktif: true,
  adres: "İstanbul",
  maas: 120
},
{
    id: 4,
  isim: "Bora",
  yas: 23,
  aktif: true,
  adres: "İstanbul",
  maas: 120
},
{
    id: 5,
  isim: "Efe",
  yas: 22,
  aktif: false,
  adres: "İstanbul",
  maas: 20
},

]

const aktifKullanici = kullanicilar.filter(kullanici => kullanici.aktif === true);
const gencAktif =aktifKullanici.filter(k => k.yas< 30)

const isimler = gencAktif.map(({ isim }) => isim);

const toplamMaas = aktifKullanici.reduce((toplamDeger, siradakiEleman) => toplamDeger + siradakiEleman.maas, 0)

const yeniKullanicilar = [...kullanicilar , {id: 6, isim: "Ayse", yas:28, aktif: true, adres:"Ankara", maas:30}]

const guncelleme = kullanicilar.map(kullanici => kullanici.id === 1 ? {...kullanici, maas:50}: kullanici) ;

console.log("=== KULLANICI RAPORU ===");
console.log(`Toplam kullanici: ${kullanicilar.length}`);
console.log(`Aktif kullanici: ${aktifKullanici.length}`);
console.log(`Genc aktif kullanici (30 yas alti): ${gencAktif.length}`);
console.log(`Genc aktif kullanicilarin isimleri: ${isimler.join(', ')}`);
console.log(`Aktif kullanicilarin toplam maasi: ${toplamMaas}`);

// filter,map,reduce zincir örnek

const urunler = [
  { isim: "Kitap", fiyat: 50, kategori: "egitim" },
  { isim: "Oyun", fiyat: 200, kategori: "eglence" },
  { isim: "Kalem", fiyat: 10, kategori: "egitim" },
  { isim: "Film", fiyat: 30, kategori: "eglence" },
];

// Egitim urunlerinin isimlerini al ve toplam fiyatini bul

const egitimToplam = urunler
    .filter(u => u.kategori === "egitim")
    .map(u => u.fiyat)
    .reduce((t,f) => t+f , 0)

console.log(egitimToplam)