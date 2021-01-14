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
    $("#sp_navi_btn").click(function() {
        $(this).next('ul').slideToggle();
    });
    
    $(".list-materials .list-title").click(function(){
            $(this).next('.ichiran').slideToggle();
        });

    $("#top-btn").click(function() {
            $("html,body").animate({
                "scrollTop": 0
            }, 500);
        });

        new WOW().init();
});
