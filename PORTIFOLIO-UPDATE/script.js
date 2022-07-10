window.onscroll = function () {
  shadow_header()
}
function shadow_header() {
  if (document.documentElement.scrollTop > 60) {
    document.querySelector('header').className = '.shadow_header shadow_Blue'
  } else {
    document.querySelector('header').className = ''
  }
}

ScrollReveal().reveal(
  '.left_content,.right_content,.services_container figure img',
  {
    opacity: 0,
    duration: 800,
    reset: true
  }
)
ScrollReveal().reveal('.caixa', {
  opacity: 0,
  duration: 1100,
  reset: true
})
