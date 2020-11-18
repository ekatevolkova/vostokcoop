
const sections = document.querySelectorAll('section')
const projects = document.querySelectorAll('div.intro, div.project')
const frames = document.querySelectorAll('div.frame')
const header = document.querySelector('header')
const headerSpan = document.getElementById('header-span')
const logo = document.getElementById('logo')
const animation = document.querySelector('section.animation')
const gallery = document.getElementById('container')
const introFrame = document.querySelector('div.intro-frame')

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


// projects.forEach(project => {
//   observer.observe(project)
// })

sections.forEach(section => {
  observer.observe(section)

})

const headerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.intersectionRatio > 0.2) {
          headerSpan.style.opacity = '0'
          logo.style.opacity = '1'
      } else {
          headerSpan.style.opacity = '1'
          logo.style.opacity = '0'
      }
  })
}, {
      threshold: [0.0, 0.2, 1.0]
})

window.onscroll = function headerChanging() {
  if (gallery.classList.contains("in-view")) {
    headerSpan.style.opacity = '0'
    logo.style.opacity = '1'
    
  } else {
    headerSpan.style.opacity = '1'
    logo.style.opacity = '0'
  }

  if (animation.scrollTop > 72) {
    header.style.display = 'none'
  }
}
frames.forEach(frame => {
  observer.observe(frame)
})


headerObserver.observe(gallery)