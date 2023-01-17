let btn1 = document.querySelector('.btn1');
btn1.addEventListener('click' , function(){
  document.querySelector('.img-menu').style.transform = 'translateX(0)'
})

let btn2 = document.querySelector('.btn2');
btn2.addEventListener('click' , function(){
  document.querySelector('.img-menu').style.transform = 'translateX(-100vw)'
})

let btn3 = document.querySelector('.btn3');
btn3.addEventListener('click' , function(){
  document.querySelector('.img-menu').style.transform = 'translateX(-200vw)'
})

let btn4 = document.querySelector('.btn4');
btn4.addEventListener('click' , function(){
  document.querySelector('.img-menu').style.transform = 'translateX(-300vw)'
})



// $('.btn'+i).on('click', function(){
//   $('.imgimg').css({'transform' : translate('-100vw')*i});
// })

// $('.imgimg>img').mouseover(function(){
//   $(this).css({'transform' : 'translateX(-100vw)'});
// })

// $('.imgimg>img').mouseout(function(){
//   $(this).css({'transform' : 'translateX(-200vw)'});
// })


// $('.imgimg>img').mouseover(function(){
//     $(this).animate({opacity:0});
// })

$('.imgimg>img').on('click', function(){
  $(this).css({'transform':'translateX(-100vw)'})
})