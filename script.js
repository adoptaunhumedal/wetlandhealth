const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open);
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const modal = document.querySelector("#wetland-modal");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalClose = document.querySelector(".modal-close");
const modalBackdrop = document.querySelector(".modal-backdrop");

const wetlands = {
  eo: {
    title: "Ría del Eo",
    description: "Humedal costero del occidente de Asturias y espacio Ramsar. En el proyecto se estudiará su biodiversidad, parámetros ambientales y posibles amenazas mediante ciencia ciudadana y técnicas de ADN ambiental."
  },
  villaviciosa: {
    title: "Ría de Villaviciosa",
    description: "Humedal costero y espacio Ramsar de gran valor ecológico. El proyecto busca conocer mejor su biodiversidad y estado ambiental, generando información útil para su conservación."
  },
  aviles: {
    title: "Ría de Avilés",
    description: "Sistema estuarino incluido en el ámbito del proyecto. Se analizarán sus comunidades biológicas, parámetros ambientales y residuos mediante la participación ciudadana."
  },
  ribadesella: {
    title: "Ría de Ribadesella",
    description: "Humedal costero seleccionado para estudiar biodiversidad, calidad ambiental y amenazas, combinando observaciones ciudadanas con análisis de ADN ambiental."
  },
  granda: {
    title: "Embalse de La Granda",
    description: "Humedal de agua dulce incluido en el estudio. La participación ciudadana permitirá recoger datos ambientales y muestras para conocer mejor su biodiversidad."
  },
  trasona: {
    title: "Embalse de Trasona",
    description: "Humedal de agua dulce seleccionado para el seguimiento de biodiversidad y estado ambiental mediante muestreo ciudadano y análisis científico."
  },
  furta: {
    title: "La Furta",
    description: "Humedal de agua dulce incluido en el proyecto. Se estudiarán sus comunidades biológicas y sus principales características ambientales."
  }
};

function openModal(key) {
  const data = wetlands[key];
  if (!data) return;
  modalTitle.textContent = data.title;
  modalDescription.textContent = data.description;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-modal]").forEach(button => {
  button.addEventListener("click", () => openModal(button.dataset.modal));
});

modalClose?.addEventListener("click", closeModal);
modalBackdrop?.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
});

const langToggle = document.querySelector(".lang-toggle");
langToggle?.addEventListener("click", () => {
  alert("La versión bilingüe español-inglés se puede activar en la siguiente fase del proyecto.");
});
