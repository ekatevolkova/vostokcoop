const allLines = document.querySelectorAll('div.line1, div.line3, div.line2, div.line4, div.line5, div.line6')
const lines1 = document.querySelectorAll('div.line1, div.line3, div.line5')
const lines2 = document.querySelectorAll('div.line2, div.line4, div.line6')

const line1 = document.querySelector('div.line1')
const line2 = document.querySelector('div.line2')

const letters = document.querySelector('div.letters')

const spanTag1 = line1.querySelector('span')
const spanTag2 = line2.querySelector('span')
const spanWidth1 = spanTag1.clientWidth
const spanWidth2 = spanTag2.clientWidth


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
        .to(lines1, {x: spanWidth1 * - 1, duration: 30, ease: 'linear'})
    
    lines2Timeline
        .set(lines2, {x: 0 })
        .to(lines2, {x: spanWidth2 , duration: 30, ease: 'linear'})    

