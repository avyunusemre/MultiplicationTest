const baslik = document.querySelector(".baslik");
const soru = document.querySelector(".soru");
const p = document.querySelector(".p");
const cevapBox = document.querySelector(".cevap");
const baslatBtn = document.querySelector(".baslat");
const bitirBtn = document.querySelector(".bitir");
let dogruSayisi = 0;
let yanlisSayisi = 0;

eventListeners();

function eventListeners() {
  baslatBtn.addEventListener("click", baslat);
  cevapBox.addEventListener("keyup", devam);
  bitirBtn.addEventListener("click", bitir);
}

function baslat() {
  baslik.innerHTML = "The Multiplication Exam";
  cevapBox.value = "";
  rastgele();
  p.style.display = "block";
}

function rastgele() {
  ilkSayi = Math.ceil(Math.random() * 12);
  ikinciSayi = Math.ceil(Math.random() * 12);
  soru.innerHTML = `${ilkSayi} x ${ikinciSayi} =`;
}

function devam(event) {
  if (event.keyCode == 13) {
    dogrula();
    rastgele();
    cevapBox.value = "";
    p.style.display = "none";
  }
}

function dogrula() {
  cevap = Number(cevapBox.value);
  dogruCevap = ilkSayi * ikinciSayi;

  if (dogruCevap == cevap) {
    dogruSayisi++;
    cevapBox.className = "cevap ms-4 text-center bg-success";
  } else {
    yanlisSayisi++;
    cevapBox.className = "cevap ms-4 text-center bg-danger";
  }
}

function bitir() {
  if (dogruSayisi >= 2 * yanlisSayisi) {
    baslik.innerHTML = `***Congratulations*** Right : ${dogruSayisi}, False : ${yanlisSayisi}`;
  } else if (dogruSayisi >= yanlisSayisi) {
    baslik.innerHTML = `***Not Bad*** Right : ${dogruSayisi}, False : ${yanlisSayisi}`;
  } else {
    baslik.innerHTML = `***You must work!*** Right : ${dogruSayisi}, False : ${yanlisSayisi}`;
  }
  cevapBox.value = "";
  p.style.display = "none";
  reset();
}

function reset() {
  dogruSayisi = 0;
  yanlisSayisi = 0;
}
