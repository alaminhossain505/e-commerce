$(document).ready(function(){
    // window scroling 
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        // show-hide back to top button 
        if(scrolling > 500){
            $('.back-to-top i').fadeIn();
        }else{
            $('.back-to-top i').fadeOut();
        }

        // nav-fix
        if(scrolling > 300){
            $('nav').addClass('nav-fix');
        }else{
            $('nav').removeClass('nav-fix');
        };
    });

    // back to top 
    $('.back-to-top i').click(function(){
        $('html,body').animate({
            scrollTop : 0,
        },1000)
    });

});