const prev = document.getElementById('prevSlide')
const next = document.getElementById('nextSlide')

const images = Array.from(document.querySelectorAll('.inicio__img'))
const texts = Array.from(document.querySelectorAll('.inicio__text'))

let cont = 0

if (prev) {
    prev.addEventListener('click', () => {
        setClass('prev')
    })
}

if (next) {
    next.addEventListener('click', () => {
        setClass('next')
    })
}

const setClass = (direction) => {
    images.map(image => image.classList.remove('show'))
    texts.map(text => text.classList.remove('show'))
    setCont(direction)
    images[cont].classList.add('show')
    texts[cont].classList.add('show')
}

const setCont = (direction) => {
    if(direction=='next'){
        if (cont == images.length-1) cont = 0
        else cont++
    }
    else{
        if (cont == 0) cont = images.length-1
        else cont--
    }
}