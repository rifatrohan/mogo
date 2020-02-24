$(function(){
 
    //preloader
    $(window).on('load',function(){
     $('.preloader').delay(2800).fadeOut(2800);     
})
    

    
    //counterup
$('.counter').counterUp({
    delay: 10,
    time: 1000,
});

//feedback slider
    
$('.feedback-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:true,
  prevArrow:'.right',
  nextArrow:'.left',
  autoplaySpeed: 2000,
});
    
//navbar bg    
$(window).scroll(function(){
var scrolling =$(this).scrollTop();
if (scrolling >200){
    $('.navbar').addClass('bg');
}   
else {
    $('.navbar').removeClass('bg');
}
    
});   


 //animation scroll 
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 90
                }, 1500);
                return false;
            }
        }
    });    
  
   //back-top scroll   
    $('.back-top').click(function(){
        $('html,body').animate({scrollTop:0},1500);
    });
    
    $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
        if(scrolling >200){
        $('.back-top').fadeIn(500);
    }
    else{
        $('.back-top').fadeOut(500);
    }
        
});     
    
    
});