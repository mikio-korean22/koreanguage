$(document).ready(function() {
    
    //カルーセル
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        items: 1,
        autoplay: true
    });
    
    //メニュー
    $(".examination_h3").click(function() {
        $(this).next('.examination_contents').slideToggle();
    });
    
    $(".list-title").click(function(){
            $(this).next('.ichiran').slideToggle();
        });

    $("#top-btn").click(function() {
            $("html,body").animate({
                "scrollTop": 0
            }, 500);
        });

        new WOW().init();
});
