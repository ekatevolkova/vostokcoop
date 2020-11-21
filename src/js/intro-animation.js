
const allLines = document.querySelectorAll('div.line1, div.line3, div.line2, div.line4, div.line5, div.line6')
const lines1 = document.querySelectorAll('div.line1, div.line3, div.line5')
const lines2 = document.querySelectorAll('div.line2, div.line4, div.line6')

const line1 = document.querySelector('div.line1')
const line2 = document.querySelector('div.line2')

const letters = document.querySelector('div.letters')

const spanTag = line1.querySelector('span')
const spanWidth = spanTag.clientWidth

const cursorClip = document.querySelector('div.clip')
const paper = document.querySelector('div.tracingpaper')

const mq = window.matchMedia("(min-width: 600px) and (prefers-reduced-motion: no-preference)")

const runScripts = function () {


    allLines.forEach(line => {
        const span = line.querySelector('span')
        for (let i = 0; i < 30; i = i + 1) {
            line.appendChild(span.cloneNode(true))
        }
    })

    const lines1Timeline = gsap.timeline({
        repeat: -1
    })
    const lines2Timeline = gsap.timeline({
        repeat: -1
    })
    
    lines1Timeline
        .set(lines1, {x: 0})
        .to(lines1, {x: spanWidth * - 1, duration: 45, ease: 'linear'})
    
    lines2Timeline
        .set(lines2, {x: 0 })
        .to(lines2, {x: spanWidth , duration: 45, ease: 'linear'})    
    






        let cursorCurrentX = 0
        let cursorAimX = 0
        let w = window.innerWidth
        let insetRight = 0
        let insetLeft = 0

    const changeCursor = function () {
        cursorCurrentX = cursorAimX * 100 / w * 0.75
        insetRight =  85 - cursorCurrentX +2
        insetLeft = 95 - (85 - cursorCurrentX) -1
        cursorClip.style.clipPath = `inset(0 ${insetRight}vw 0 ${insetLeft}vw)`

        paper.style.transform = `translateX(${insetRight * -1 + 3 }vw)`



        requestAnimationFrame(changeCursor)
    }
    document.addEventListener('mousemove', function (event) {
        cursorAimX = event.pageX 
       
    }) 
    document.addEventListener('touchmove', function (event) {
        cursorAimX = event.pageX 
       
    }) 
    changeCursor()

}
runScripts()

