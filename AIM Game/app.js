const start = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const over = document.querySelector('#over')
let time = 0 
let score = 0
 start.addEventListener('click', (elem) => {
    elem.preventDefault()
    screens[0].classList.add('up')
 })

 timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
 })

 board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        creRandCir()
    }
 })

 function startGame() {
    setInterval(decrisTime, 1000)
    creRandCir()
    setTime(time)
 }

 function decrisTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current <10) {
            current = `0${current}`
        }
        setTime(current)
    }
 }

 function setTime(val) {
    timeEl.innerHTML = `00:${val}`
 }

 function finishGame() {
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
    over.remove()
 }

 function creRandCir() {
    const circle = document.createElement('div')
    const size = getRandN(10,60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandN(0, width-size)
    const y = getRandN(0, width-size)
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    board.append(circle)
}

function getRandN(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}