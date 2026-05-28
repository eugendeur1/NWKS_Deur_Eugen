const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const plannerForm = document.querySelector("#planner-form");

if (plannerForm) {
  plannerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const dailyPrice = Number(document.querySelector("#destination").value);
    const travelers = Number(document.querySelector("#travelers").value);
    const days = Number(document.querySelector("#days").value);
    const styleMultiplier = Number(document.querySelector("#style").value);
    const total = Math.round(dailyPrice * travelers * days * styleMultiplier);

    document.querySelector("#budget-result").textContent = `${total} EUR`;
    document.querySelector("#budget-note").textContent =
      `Procjena ukljucuje ${travelers} putnika kroz ${days} dana.`;
  });
}
