let chanegeToAdd = document.querySelector('.add')
let changeTheElemnet = document.querySelector('h3')
let clicking =0;

chanegeToAdd.addEventListener('click',function(){
  if(clicking === 0) {
  changeTheElemnet.innerHTML='Add to Friend'
  changeTheElemnet.style.color='green'
  chanegeToAdd.innerHTML='Remove Friend'
  clicking=1;
  } else {
    changeTheElemnet.innerHTML='Stranger'
    changeTheElemnet.style.color='red'
    chanegeToAdd.innerHTML='Add To Friend'
    clicking=0;
  }
})

// chanegeToAdd2.addEventListener('click',function(){
//   changeTheElemnet.innerHTML='Stranger'
//   changeTheElemnet.style.color='red'
// })