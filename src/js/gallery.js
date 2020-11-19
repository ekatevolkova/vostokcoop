
gsap.registerPlugin(ScrollTrigger);

let container = document.getElementById("container");

ScrollTrigger.matchMedia({

"(min-width: 900px)": function() {

gsap.to(container, {
  x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: container,
    invalidateOnRefresh: true,
    pin: true,
    scrub: 1,
    end: () => "+=" + container.offsetWidth
  }
})

}
})

ScrollTrigger.matchMedia({

  "(max-width: 899px)": function() {
  
  gsap.to(".square", {
    scrollTrigger: {
      trigger: ".square",
      start: "top 90%",
      scrub: 0.5
    },
    x: "25%",
    ease: "none"
    
  })
  
  gsap.to(".monument", {
    scrollTrigger: {
      trigger: ".monument",
      start: "top 90%",
      scrub: 0.5,
      markers: 'true'
    },
    x: "-100%",
    ease: "none"
  })

  gsap.to(".scheme", {
    scrollTrigger: {
      trigger: ".scheme",
      start: "top 40%",
      scrub: 0.5
    },
    y: "-80%",
    opacity: 0.2,
    ease: "none"
  })

  gsap.to(".nepal", {
    scrollTrigger: {
      trigger: ".nepal",
      start: "top 90%",
      scrub: 0.5
    },
    x: "20%",
    ease: "none"
  })

  gsap.to(".sound", {
    scrollTrigger: {
      trigger: ".sound",
      start: "top 80%",
      scrub: 0.5
    },
    x: "-50%",
    ease: "none"
  })

  gsap.to(".stand", {
    scrollTrigger: {
      trigger: ".stand",
      start: "top 80%",
      scrub: 0.5
    },
    ease: "none",
    scale: 1.5
  })


  }
  })
// gsap.utils.toArray('.frame').forEach(frame=> {
//   ScrollTrigger.create({
//       trigger: frame,
//       start: 'left 50%',
//       // end: 'right center',
//       markers: true,
//       toggleClass: 'in-view'
//   });
// });
          