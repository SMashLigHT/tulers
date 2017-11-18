console.log("i m here")

const allDivs = document.getElementsByTagName ('div')
const allThisClass = document.getElementsByClassName('mainHeader')
const newWay = document.querySelectorAll('.mainFooter')
const newWaySingle = document.querySelector('main')

console.log(allDivs)
console.log(allThisClass)
console.log(newWay)
console.log(newWaySingle)

const hero = document.querySelector('.hero')
hero.style.backgroundColor = 'purple'

const paragraph = document.getElementById('paragraph')
paragraph.style.letterSpacing = '10px'


const theColor = prompt('Введите цвет')
hero.style.backgroundColor = theColor