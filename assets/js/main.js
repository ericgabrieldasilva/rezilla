const menuMobile = document.querySelector(".menu-mobile")
const btnOpenMenu = document.querySelector("#btn-open-menu")
const btnCloseMenu = document.querySelector("#btn-close-menu")

btnOpenMenu.addEventListener("click", function(event){
  menuMobile.classList.add("show-menu-mobile")
})

btnCloseMenu.addEventListener("click", function (event) {
  menuMobile.classList.remove("show-menu-mobile")
})
