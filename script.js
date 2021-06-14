const bal = document.querySelector('.bal')
const jobb = document.querySelector('.jobb')
const container = document.querySelector('.container')

bal.addEventListener('mouseenter', () => 
container.classList.add('hover-bal'))
bal.addEventListener('mouseleave', () => 
container.classList.remove('hover-bal'))

jobb.addEventListener('mouseenter', () => 
container.classList.add('hover-jobb'))
jobb.addEventListener('mouseleave', () => 
container.classList.remove('hover-jobb'))
