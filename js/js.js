$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 60) {
        $(".header").addClass("bgheader");
    } else {
        $(".header").removeClass("bgheader");
    }
});