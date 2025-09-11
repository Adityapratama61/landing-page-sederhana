document.addEventListener("DOMContentLoaded", () => {
  const productLink = document.querySelector(".navbar ul li:first-child > a");
  const dropdown = document.querySelector(".dropdown_menu");

  productLink.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!productLink.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });
});
