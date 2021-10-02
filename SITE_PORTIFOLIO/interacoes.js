const tl = gsap.timeline()
const especial = document.querySelector('#especial')
const home = document.querySelector('#home')
const about = document.querySelector('#about')
const projetos = document.querySelector('#projetos')
const logo = document.querySelector('#logo')
const left_informacoes = document.querySelector('#left_informacoes')
const right_informacoes = document.querySelector('#right_informacoes')
const box_1 = document.querySelector('#box_1')
const box_2 = document.querySelector('#box_2')
const box_3 = document.querySelector('#box_3')
const box_4 = document.querySelector('#box_4')
const projetos_aba = document.querySelector('#projetos_aba')
tl.from(left_informacoes, {
  duration: 1.5,
  scale: 0,
  opacity: 0,
  x: -500,
  stagger: 0.3
}).from(right_informacoes, {
  duration: 2,
  scale: 0,
  opacity: 0,
  x: -1000,
  stagger: 0.3,
  delay: 0.3
})

especial.addEventListener('mouseover', function () {
  gsap.to(especial, {
    duration: 0.3,
    scale: 1.2,
    stagger: 0.3
  })
})

especial.addEventListener('mouseout', function () {
  gsap.to(especial, {
    duration: 0.3,
    scale: 1,
    stagger: 0.3
  })
})
home.addEventListener('mouseover', function () {
  gsap.to(home, {
    duration: 0.3,
    scale: 1.2,
    stagger: 0.3
  })
})

home.addEventListener('mouseout', function () {
  gsap.to(home, {
    duration: 0.3,
    scale: 1,
    stagger: 0.3
  })
})

about.addEventListener('mouseover', function () {
  gsap.to(about, {
    duration: 0.3,
    scale: 1.2,
    stagger: 0.3
  })
})

about.addEventListener('mouseout', function () {
  gsap.to(about, {
    duration: 0.3,
    scale: 1,
    stagger: 0.3
  })
})

projetos.addEventListener('mouseover', function () {
  gsap.to(projetos, {
    duration: 0.3,
    scale: 1.2,
    stagger: 0.3
  })
})

projetos.addEventListener('mouseout', function () {
  gsap.to(projetos, {
    duration: 0.3,
    scale: 1,
    stagger: 0.3
  })
})
/* projetos_aba.addEventListener('mouseover', function () {
  gsap.from('.box', {
    duration: 1,
    scale: gsap.utils.wrap([0, 0, 0, 0]),
    opacity: gsap.utils.wrap([0, 0, 0, 0.0]),
    stagger: 0.4
  })
}) */
box_1.addEventListener('mouseover', function () {
  gsap.to(box_1, {
    duration: 0.3,
    scale: 1.1,
    stagger: 0.3
  })
})

box_1.addEventListener('mouseout', function () {
  gsap.to(box_1, {
    duration: 0.3,
    scale: 1,
    stagger: 0.3
  })
})

box_2.addEventListener('mouseover', function () {
  gsap.to(box_2, {
    duration: 0.3,
    scale: 1.1,
    stagger: 0.3
  })
})

box_2.addEventListener('mouseout', function () {
  gsap.to(box_2, {
    duration: 0.3,
    scale: 1,
    stagger: 0.3
  })
})

box_3.addEventListener('mouseover', function () {
  gsap.to(box_3, {
    duration: 0.3,
    scale: 1.1,
    stagger: 0.3
  })
})

box_3.addEventListener('mouseout', function () {
  gsap.to(box_3, {
    duration: 0.3,
    scale: 1,
    stagger: 0.3
  })
})

box_4.addEventListener('mouseover', function () {
  gsap.to(box_4, {
    duration: 0.3,
    scale: 1.1,
    stagger: 0.3
  })
})

box_4.addEventListener('mouseout', function () {
  gsap.to(box_4, {
    duration: 0.3,
    scale: 1,
    stagger: 0.3
  })
})
