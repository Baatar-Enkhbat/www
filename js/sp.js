
 

$(function(){
    //表示するスクロール量（px）
    var scrollPoint = 60;
    $(window).scroll(function(){
        if($(this).scrollTop() > scrollPoint){
            $('.menu-sp-bg2').fadeIn();
        }else{
            $('.menu-sp-bg2').fadeOut();
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


