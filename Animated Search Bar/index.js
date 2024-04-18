const searchBarConteinerEL = document.querySelector(".search-bar-conteiner");
const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () => {
  searchBarConteinerEL.classList.toggle("active");
});
