const inpuTask = document.querySelector('#btnInput')
const clearTasks = document.querySelector('#btnClearTask')
const clearAll_Task = document.querySelector('#btnClearAll')
const text = document.querySelector('#inputText')
const title = document.querySelector('#titulo')
inpuTask.addEventListener('mouseover', function () {
  gsap.to(inpuTask, {
    duration: 0.4,
    scale: 1.1,
    stagger: 0.3
  })
})

inpuTask.addEventListener('mouseout', function () {
  gsap.to(inpuTask, {
    duration: 0.3,
    scale: 1,
    stagger: 0.3
  })
})

clearTasks.addEventListener('mouseover', function () {
  gsap.to(clearTasks, {
    duration: 0.4,
    scale: 1.1,
    stagger: 0.3
  })
})

clearTasks.addEventListener('mouseout', function () {
  gsap.to(clearTasks, {
    duration: 0.3,
    scale: 1,
    stagger: 0.3
  })
})

clearAll_Task.addEventListener('mouseover', function () {
  gsap.to(clearAll_Task, {
    duration: 0.4,
    scale: 1.1,
    stagger: 0.3
  })
})

clearAll_Task.addEventListener('mouseout', function () {
  gsap.to(clearAll_Task, {
    duration: 0.3,
    scale: 1,
    stagger: 0.3
  })
})

text.addEventListener('mouseover', function () {
  gsap.to(text, {
    duration: 0.4,
    scale: 1.01,
    stagger: 0.5
    /*  width: 500, */
  })
})

text.addEventListener('mouseout', function () {
  gsap.to(text, {
    duration: 0.3,
    scale: 1,
    stagger: 0.3
  })
})

gsap.from(title, {
  duration: 3.5,
  opacity: 0,
  stagger: 0.5
  /*  width: 500, */
})

gsap.to(title, {
  duration: 3.5,
  opacity: 1,
  stagger: 0.3
})
