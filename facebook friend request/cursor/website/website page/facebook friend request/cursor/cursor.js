let mainElement = document.querySelector('#main')
let cursorElemt = document.querySelector('.cursor')

mainElement.addEventListener('mousemove',function(moveing){
  cursorElemt.style.left = moveing.x+'px'
  cursorElemt.style.top = moveing.y+'px'
})