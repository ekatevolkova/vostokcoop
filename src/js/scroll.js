const sections = document.querySelectorAll('section')
const projects = document.querySelectorAll('div.pr1, div.pr2, div.pr3')
const header = document.querySelector('header')
let pxFromTop = window.pageYOffset
let pxFromBot 

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.intersectionRatio > 0.1) {
          entry.target.classList.add('in-view')
      } else {
          entry.target.classList.remove('in-view')
      }
  })
}, {
      threshold: [0.0, 0.1, 1.0]
})

sections.forEach(section => {
  observer.observe(section)

})

projects.forEach(project => {
  observer.observe(project)
})



