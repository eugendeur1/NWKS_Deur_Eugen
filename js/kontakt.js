const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const savedInquiry = localStorage.getItem("travelmateInquiry");
  const status = document.querySelector("#contact-status");
  const preview = document.querySelector("#contact-preview");

  if (savedInquiry && status && preview) {
    const inquiry = JSON.parse(savedInquiry);
    status.textContent = "Zadnji spremljeni upit";
    preview.textContent = `${inquiry.name} zeli posjetiti ${inquiry.destination}.`;
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const inquiry = {
      name: document.querySelector("#name").value.trim(),
      email: document.querySelector("#email").value.trim(),
      destination: document.querySelector("#contact-destination").value,
      message: document.querySelector("#message").value.trim()
    };

    localStorage.setItem("travelmateInquiry", JSON.stringify(inquiry));

    status.textContent = "Upit je uspjesno spremljen";
    preview.textContent = `${inquiry.name}, odgovor saljemo na ${inquiry.email}. Odabrana destinacija: ${inquiry.destination}.`;
    contactForm.reset();
  });
}
