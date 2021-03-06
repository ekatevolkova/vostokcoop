const allLines = document.querySelectorAll('div.line1, div.line3, div.line2, div.line4, div.line5, div.line6')
const lines1 = document.querySelectorAll('div.line1, div.line3, div.line5')
const lines2 = document.querySelectorAll('div.line2, div.line4, div.line6')

const line1 = document.querySelector('div.line1')
const line2 = document.querySelector('div.line2')

const letters = document.querySelector('div.letters')

const spanTag = line1.querySelector('span')
const spanWidth = spanTag.clientWidth

const cursorClip = document.querySelector('div.collage')

const mq = window.matchMedia("(min-width: 600px) and (prefers-reduced-motion: no-preference)")

const runScripts = function () {
    if (mq.matches) {

    allLines.forEach(line => {
        const span = line.querySelector('span')
        for (let i = 0; i < 10; i = i + 1) {
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
    }






        let cursorCurrentX = 0
        let cursorCurrentY = 0
        let cursorAimX = 0
        let cursorAimY = 0

    const changeCursor = function () {
        cursorCurrentX = cursorCurrentX + (cursorAimX - cursorCurrentX) * 0.15
        cursorCurrentY = cursorCurrentY + (cursorAimY - cursorCurrentY) * 0.15

        cursorClip.style.clipPath = `circle(8% at ${cursorCurrentX}px ${cursorCurrentY}px)`

        requestAnimationFrame(changeCursor)
    }
    document.addEventListener('mousemove', function (event) {
        cursorAimX = event.pageX 
        cursorAimY = event.pageY 
    }) 

    changeCursor()

}
runScripts()
