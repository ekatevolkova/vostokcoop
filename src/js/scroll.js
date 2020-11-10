
const sections = document.querySelectorAll('section')
const projects = document.querySelectorAll('div.intro, div.project')
const header = document.querySelector('header')
const headerSpan = document.getElementById('header-span')
const logo = document.getElementById('logo')
const animation = document.querySelector('section.animation')
const gallery = document.getElementById('container')

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.intersectionRatio > 0.075) {
          entry.target.classList.add('in-view')

      } else {
          entry.target.classList.remove('in-view')
      }
  })
}, {
      threshold: [0.0, 0.075, 1.0]
})



sections.forEach(section => {
  observer.observe(section)


})

projects.forEach(project => {
  observer.observe(project)
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

console.log(window.scrollY)
// const scroll = document.querySelector('section.scroll')
// scroll.addEventListener('wheel', function(e) {
//   const w = window.innerHeight
//   const offset = scroll.getBoundingClientRect();
//   const right = offset.width
//   const leftover = scroll.scrollWidth - scroll.clientWidth - scroll.scrollLeft
//   const setback = scroll.scrollWidth * 2
//   if (e.deltaY > 0 & leftover > 150 ) 
//   {
//     scroll.scrollLeft += 90
//   }
//   else if (e.deltaY < 0 & leftover > 150 ) {
//     scroll.scrollLeft -= 90
//   } else
//   {
//     scroll.scrollLeft -= setback
//     scroll.scrollTop -= setback
//   }

//   console.log(leftover, w)
// })


