let show = true
const menuSection = document.querySelector('.menu-section')
const menuToggle = document.querySelector('.menu-toggle')

menuToggle.addEventListener('click', () => {
  menuSection.classList.toggle('on', show)
  document.body.style.overflow = show ? 'hidden' : 'initial'
  show = !show
})
