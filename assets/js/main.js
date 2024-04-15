openMenuMobile()
headerFixed()

window.onscroll = function () {
  headerFixed()
}

function openMenuMobile() {
  const body = document.querySelector("body")
  const menuMobile = document.querySelector(".menu-mobile")
  const btnOpenMenu = document.querySelector("#btn-open-menu")
  const btnCloseMenu = document.querySelector("#btn-close-menu")

  btnOpenMenu.addEventListener("click", function (event) {
    menuMobile.classList.add("show-menu-mobile")
    body.style.overflowY = "hidden"
  })

  btnCloseMenu.addEventListener("click", function (event) {
    menuMobile.classList.remove("show-menu-mobile")
    body.style.overflowY = "visible"
  })
}

function headerFixed() {
  const adress = document.querySelector(".adress")
  const header = document.querySelector("header")

  if (window.pageYOffset > adress.offsetHeight) {
    header.classList.add("fixed-header")
  } else {
    header.classList.remove("fixed-header")
  }
}
