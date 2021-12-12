
 
$(function(){
    //表示するスクロール量（px）
    var scrollPoint = 60;
    $(window).scroll(function(){
        if($(this).scrollTop() > scrollPoint){
            $('.fixed_header').fadeIn();
        }else{
            $('.fixed_header').fadeOut();
        }
    });
});

$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});

