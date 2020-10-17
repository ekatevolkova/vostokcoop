const lines = document.querySelectorAll('div.line1, div.line2')
const line1 = document.querySelector('div.line1')
const line2 = document.querySelector('div.line2')
const letters = document.querySelector('div.letters')

const spanTag1 = line1.querySelector('span')
const spanTag2 = line2.querySelector('span')
const spanWidth1 = spanTag1.clientWidth
const spanWidth2 = spanTag2.clientWidth

function runningLetters () {
    for (let i = 0; i < 20; i = i + 1) {
        line1.appendChild(spanTag1.cloneNode(true))
        line2.appendChild(spanTag2.cloneNode(true))
    }
    
    const line1Timeline = gsap.timeline({
        repeat: -1
    })
    const line2Timeline = gsap.timeline({
        repeat: -1
    })
    
    line1Timeline
        .set(line1, {x: 0})
        .to(line1, {x: spanWidth1 * - 1, duration: 30, ease: 'linear'})
    
    line2Timeline
        .set(line2, {x: 0 })
        .to(line2, {x: spanWidth2 , duration: 30, ease: 'linear'})    
}

runningLetters()