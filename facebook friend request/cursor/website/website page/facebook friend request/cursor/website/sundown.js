import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[.main]'),
    smooth: true
});


let featuerdElement = document.querySelector(".featured-project");
let fixedContaniner = document.querySelector('.product-image-details');
let allElem = document.querySelectorAll('.featured-elem');


function featuerdAnimation(){
featuerdElement.addEventListener('mouseenter',function(){
    fixedContaniner.style.display = "block";
})

featuerdElement.addEventListener('mouseleave',function(){
  fixedContaniner.style.display = 'none'
})

allElem.forEach(function(img){
  img.addEventListener('mouseenter',function(){
    let allImage=img.getAttribute('data-image');
    fixedContaniner.style.backgroundImage =`url(${allImage})`
  })
})
}
featuerdAnimation();


