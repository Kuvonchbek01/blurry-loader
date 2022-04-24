const text = document.querySelector('.loading-text')

load = 0
const int = setInterval(() => {
    load++
    text.textContent = `${load}%`
    text.style.opacity = `${
        (100 - load)
    }%`

    document.body.style.backdropFilter = `blur(${10 - (10 / 100 ) * load}px)`

    if(load >= 100){
        clearInterval(int)
    }
},25)