;<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>

const contatoCaixa = document.querySelector('.contato')

gsap.from(contatoCaixa, {
  duration: 0.3,
  scale: 0,
  opacity: 0
})
