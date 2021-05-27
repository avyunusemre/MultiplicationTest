const baslik = document.querySelector(".baslik");
const soru = document.querySelector(".soru");
const p = document.querySelector(".p");
var ilkSayi = 0;
var ikinciSayi = 0;
var dogruCevap = 0;
const cevapBox = document.querySelector(".cevap");

const baslatBtn = document.querySelector(".baslat");
const bitirBtn = document.querySelector(".bitir");
var cevap = 0;
let dogruSayisi = 0;
let yanlisSayisi = 0;

function rastgele() {
  ilkSayi = Math.ceil(Math.random() * 12);
  ikinciSayi = Math.ceil(Math.random() * 12);
  soru.innerHTML = `${ilkSayi} x ${ikinciSayi} =`;
}

baslatBtn.addEventListener("click", () => {
  baslik.innerHTML = "The Multiplication Exam";
  rastgele();
  p.style.display = "enable";
  reset();
});

cevapBox.addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    dogrula();
    rastgele();
    cevapBox.value = "";
  }
});

function dogrula() {
  cevap = Number(cevapBox.value);
  dogruCevap = ilkSayi * ikinciSayi;

  if (dogruCevap == cevap) {
    dogruSayisi++;
    cevapBox.className = "cevap ms-4 text-center bg-success";
  } else {
    yanlisSayisi++;
    console.log(yanlisSayisi);
    cevapBox.className = "cevap ms-4 text-center bg-danger";
  }
  console.log("D : " + dogruSayisi);
  console.log("Y :" + yanlisSayisi);
}

bitirBtn.addEventListener("click", () => {
  dogrula();
  if (dogruSayisi >= 2 * yanlisSayisi) {
    baslik.innerHTML = `***Congratulations*** Right : ${dogruSayisi}, False : ${yanlisSayisi}`;
  } else if (dogruSayisi >= yanlisSayisi) {
    baslik.innerHTML = `***Not Bad*** Right : ${dogruSayisi}, False : ${yanlisSayisi}`;
  } else {
    baslik.innerHTML = `***You must work!*** Right : ${dogruSayisi}, False : ${yanlisSayisi}`;
  }

  p.style.display = "none";
  reset();
});

function reset() {
  dogruSayisi = 0;
  yanlisSayisi = 0;
}
