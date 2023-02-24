const openFooterModal = document.querySelector(
  ".footer__right-item:last-of-type"
);
const footerBar = document.querySelector(".footer__bar");
const footerModal = document.querySelector(".footer__modal");
const body = document.querySelector("body");
const closeFooterModal = document.querySelector(
  ".footer__modal-contenido",
  "::after"
);

openFooterModal.addEventListener("click", () => {
  body.style.overflow = "hidden";
  footerBar.style.display = "none";
  footerModal.style.display = "flex";
  footerModal.classList.add("fadeInFooter");
  setTimeout(() => {
    footerModal.classList.remove("fadeInFooter");
  }, 1000);
});

closeFooterModal.addEventListener("click", () => {
  body.style.overflow = "unset";
  footerModal.style.display = "none";
  footerBar.style.display = "flex";
  body.classList.add("fadeInBody");
  setTimeout(() => {
    body.classList.remove("fadeInBody");
  }, 1000);
});
