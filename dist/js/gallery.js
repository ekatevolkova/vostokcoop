
gsap.registerPlugin(ScrollTrigger);

let container = document.getElementById("container");

ScrollTrigger.matchMedia({

  "(min-width: 901px)": function () {

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

  "(max-width: 900px)": function () {

    gsap.to(".square", {
      scrollTrigger: {
        trigger: ".square",
        start: "top 85%",
        scrub: true
      },
      x: "40%"

    })

    gsap.to(".monument", {
      scrollTrigger: {
        trigger: ".monument",
        start: "top 85%",
        scrub: true
      },
      x: "-90%"
    })



    gsap.to(".nepal", {
      scrollTrigger: {
        trigger: ".nepal",
        start: "top 60%",
        scrub: true
      },
      x: "15%"
    })

    gsap.to(".scheme", {
      scrollTrigger: {
        trigger: ".scheme",
        start: "top 60%",
        scrub: true
      },
      y: "-55%",
      opacity: 0.5
    })

    gsap.to(".sound", {
      scrollTrigger: {
        trigger: ".sound",
        start: "top 80%",
        scrub: true
      },
      x: "-35%"
    })

    gsap.to(".stand", {
      scrollTrigger: {
        trigger: ".stand",
        start: "top 80%",
        scrub: 0.5
      },
      scale: 1.5
    })


  }
})


  // ScrollTrigger.matchMedia({

  //   "(max-width: 600px)": function () {

  //     gsap.to(".scheme", {
  //       scrollTrigger: {
  //         trigger: ".scheme",
  //         start: 'top top+=100',
  //         markers: true,
  //         scrub: 0.5
  //       },
  //       y: -600
  //     })

  //   }
  // })

// gsap.utils.toArray('.frame').forEach(frame=> {
//   ScrollTrigger.create({
//       trigger: frame,
//       start: 'left 50%',
//       // end: 'right center',
//       markers: true,
//       toggleClass: 'in-view'
//   });
// });
