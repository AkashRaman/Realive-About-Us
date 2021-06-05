$(document).ready(function () {
    
    
    $('#section-concept').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        };
    }, { 
        offset: '100px;'
    });
   
    $('.btn-discover').hover(function () {
        if ($(window).width() <= "768") {
                $(this).addClass('shadow-pulse');
            } else {
                $(this).addClass('shadow-pulse');
            }
    },
    
    function () {
        $(this).removeClass('shadow-pulse');
    });
    
    $('.js--section-concept').waypoint(function (direction) {
        if (direction == "down") {
            $('.about-us').addClass('underline');
        } else {
            $('.about-us').removeClass('underline');
        }
    }, {
        offset: '150px;'
    });
    
    $('#section-offer').waypoint(function (direction) {
        if (direction == "down") {
            $('.about-us').removeClass('underline');
            $('.phase-1').addClass('underline');
        } 
        if (direction == "up"){
            $('.about-us').addClass('underline');
            $('.phase-1').removeClass('underline');
        };
    }, {
        offset: '150px;'
    });
    
     $('.section-cause').waypoint(function (direction) {
        if (direction == "down") {
            $('.phase-1').removeClass('underline');
            $('.phase-2').addClass('underline');
        } 
        if (direction == "up"){
            $('.phase-1').addClass('underline');
            $('.phase-2').removeClass('underline');
        };
    }, {
        offset: '150px;'
    });
    
    $('.section-phases').waypoint(function (direction) {
        if (direction == "down") {
            $('.phase-2').removeClass('underline');
            $('.phase-3').addClass('underline');
        } 
        if (direction == "up"){
            $('.phase-2').addClass('underline');
            $('.phase-3').removeClass('underline');
        };
    }, {
        offset: '150px;'
    });
    
    $('.js--section-support').waypoint(function (direction) {
        if (direction == "down") {
            $('.our-cause').addClass('underline');
            $('.phase-3').removeClass('underline');
            
        } 
        if (direction == "up"){
            $('.our-cause').removeClass('underline');
            $('.phase-3').addClass('underline');
        };
    }, {
        offset: '150px;'
    });

    
    /*
    $('.nav-section').ready(function () {
        var deviceWidth = $(window).width();
        
        if (deviceWidth >= "768px") {
            $(this).css("display", "inline-block");
        };
    })
    */
    
    $('.mobile-nav-icon').click(function () {
        var nav = $('.nav-section');
        var icon = $('.mobile-nav-icon i');
        var isActive = nav.is(":visible");
        nav.slideToggle(200);
        
        if (isActive == false) {
            icon.removeClass('fa-bars');
            icon.addClass('fa-times');
        } else {
            icon.removeClass('fa-times');
            icon.addClass('fa-bars');
        };
    });
    
});
