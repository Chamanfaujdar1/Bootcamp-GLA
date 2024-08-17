console.log('hi')

const changeTextBtn = document.getElementById('btn')
const Texts = document.getElementById('text')
const Heading = document.getElementById('main-heading')
console.log(Heading)

const changeFormat = function(){
    Texts.innerHTML = 'hello everyone'
    Texts.style.color = 'blue'
}
changeTextBtn.addEventListener('click', changeFormat)