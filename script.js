const mobileMenu = document.getElementById("mobile-menu");
const menuList = document.getElementById("menu-list");

mobileMenu.addEventListener("click", () => {
  menuList.classList.toggle("active");
});
