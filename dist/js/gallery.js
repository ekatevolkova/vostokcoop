
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
// gsap.utils.toArray('.frame').forEach(frame=> {
//   ScrollTrigger.create({
//       trigger: frame,
//       start: 'left 50%',
//       // end: 'right center',
//       markers: true,
//       toggleClass: 'in-view'
//   });
// });
          