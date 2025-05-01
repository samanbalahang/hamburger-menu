$('.menu').click (function(){
    $(this).toggleClass('open');
  });
  
function menuBtnFunction(menuBtn) {
    menuBtn.classList.toggle("active");
}  