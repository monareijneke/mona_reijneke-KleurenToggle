//Variable tbv menu tonen
const openMenu = document.querySelector(".menuIcon");
const kleurList = document.querySelector(".menuKleur");

//function om menu te tonen
const show = () => {
  kleurList.classList.toggle("showMenuKleur");
};
openMenu.addEventListener("click", show);

//BONUS: Menu tonen on hover icm 'toggle' gaat niet lekker, dus:
// openMenu.addEventListener("mouseover", () => {
//   kleurList.classList.add("showMenuKleur");
// });

// openMenu.addEventListener("mouseout", () => {
//   kleurList.classList.remove("showMenuKleur");
// });

//kleuren wijzigen
const bodyBgcolor = document.querySelector(".bgColor");
const btnHome = document.querySelector(".home");
const btnBlauw = document.querySelector(".blauw");
const btnGroen = document.querySelector(".groen");
const btnRood = document.querySelector(".rood");
const btnOranje = document.querySelector(".oranje");
const btnGeel = document.querySelector(".geel");
const btns = document.getElementsByTagName("button");

const kleurHome = () => {
  bodyBgcolor.classList.remove("groen", "blauw", "geel", "rood", "oranje");
  bodyBgcolor.classList.add("home");
  kleurList.classList.remove("showMenuKleur");
  document.querySelector(".kleurTekst").innerHTML = "Dit is standaard";
};
btnHome.addEventListener("click", kleurHome);

const kleurBlauw = () => {
  bodyBgcolor.classList.remove("home", "groen", "geel", "rood", "oranje");
  bodyBgcolor.classList.add("blauw");
  kleurList.classList.remove("showMenuKleur");
  document.querySelector(".kleurTekst").innerHTML = "Dit is BLAUW";
};
btnBlauw.addEventListener("click", kleurBlauw);

const kleurGroen = () => {
  bodyBgcolor.classList.remove("home", "blauw", "geel", "rood", "oranje");
  bodyBgcolor.classList.add("groen");
  kleurList.classList.remove("showMenuKleur");
  document.querySelector(".kleurTekst").innerHTML = "Dit is GROEN";
};
btnGroen.addEventListener("click", kleurGroen);

const kleurRood = () => {
  bodyBgcolor.classList.remove("home", "blauw", "groen", "geel", "oranje");
  bodyBgcolor.classList.add("rood");
  kleurList.classList.remove("showMenuKleur");
  document.querySelector(".kleurTekst").innerHTML = "Dit is ROOD";
};
btnRood.addEventListener("click", kleurRood);

const kleurOranje = () => {
  bodyBgcolor.classList.remove("home", "blauw", "groen", "geel", "rood");
  bodyBgcolor.classList.add("oranje");
  kleurList.classList.remove("showMenuKleur");
  document.querySelector(".kleurTekst").innerHTML = "Dit is ORANJE";
};
btnOranje.addEventListener("click", kleurOranje);

const kleurGeel = () => {
  bodyBgcolor.classList.remove("home", "blauw", "groen", "rood", "oranje");
  bodyBgcolor.classList.add("geel");
  kleurList.classList.remove("showMenuKleur");
  document.querySelector(".kleurTekst").innerHTML = "Dit is GEEL";
};
btnGeel.addEventListener("click", kleurGeel);

//poging om alles in één te gooien.....

// Array.from(btns).forEach.addEventListener("click", (btn) => {
//   if (btn === btnBlauw) {
//     bodyBgcolor.classList.toggle("blauw");
//   } else if (btn === btnGroen) {
//     bodyBgcolor.classList.toggle("groen");
//   } else if (btn === btnRood) {
//     bodyBgcolor.classList.toggle("rood");
//   } else if (btn === btnOranje) {
//     bodyBgcolor.classList.toggle("oranje");
//   } else if (btn === btnGeel) {
//     bodyBgcolor.classList.toggle("geel");
//   }
// });
