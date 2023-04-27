const horas = document.querySelector(`span#horas`)
const minutos = document.querySelector(`span#minutos`)
const segundos = document.querySelector(`span#segundos`)

const relogio = setInterval(function time() {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let sec = dateToday.getSeconds()

    //If ternário para add 0 a esquerda mantendo sempre 2 digitos.
    hr < 10 ? hr = `0` + hr : null
    min < 10 ? min = `0` + min : null
    sec < 10 ? sec = `0` + sec : null

    /*
    if (hr < 10) hr = `0` + hr
    if (min < 10) min = `0` + min
    if (sec < 10) sec = `0` + sec
    */
   
    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = sec
})