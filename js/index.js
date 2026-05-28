const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const recommendations = [
  {
    title: "Zagreb za gradski vikend",
    text: "Dobar izbor za muzeje, restorane, setnju Gornjim gradom i kratke izlete u okolicu."
  },
  {
    title: "Split za sunce i obalu",
    text: "Kombiniraj Dioklecijanovu palacu, Rivu i jednodnevni izlet brodom."
  },
  {
    title: "Plitvice za prirodu",
    text: "Najbolje za mirniji tempo, setnju uz jezera i fotografiranje krajolika."
  },
  {
    title: "Rovinj za opusteni odmor",
    text: "Istra, stari grad, more i odlicna hrana u kompaktnom planu putovanja."
  }
];

const dailyTitle = document.querySelector("#daily-title");
const dailyText = document.querySelector("#daily-text");

if (dailyTitle && dailyText) {
  const index = new Date().getDay() % recommendations.length;
  dailyTitle.textContent = recommendations[index].title;
  dailyText.textContent = recommendations[index].text;
}
