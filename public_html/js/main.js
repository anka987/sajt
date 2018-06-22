$(document).ready(function () {

// SLIDE UP AND DOWN DROPDOWN LISTS IN NAVIGATION
    $('.has-submenu .nav-link').click(function (e) {
        e.preventDefault();
        if ($(this).next('.shop-products-dropdown').hasClass('opened')) {
            $(this).next('.shop-products-dropdown').removeClass('opened');
        } else {
            $('.shop-products-dropdown').removeClass('opened');
            $(this).next('.shop-products-dropdown').addClass('opened');
        }
    });


    // HEADER SEARCH SHOW
    $(".show-search").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('fa-search fa-close');
        $(".search-form").toggleClass("open-search");
    });


    // OWL-CAROUSEL
    
    // HEADER SLIDER
    if ($('.owl-carousel').length > 0) {
        $('.authors-slider').owlCarousel({
            loop: true,
            margin: 10,
            items: 1,
            nav: true,
            dots: false,
            navText: ['<', '>']
        });
    }
    
    
    // FRECKLES SLIDER
    if ($('.owl-carousel').length > 0) {
        $('.freckles-slider').owlCarousel({
            loop: true,
            margin: 10,
            items: 1,
            nav: true,
            dots: false,
            navText: ['<', '>']
        });
    }
    
    
    // GEL SLIDER
    if ($('.owl-carousel').length > 0) {
        $('.gel-slider').owlCarousel({
            loop: true,
            margin: 10,
            items: 1,
            nav: true,
            dots: false,
            navText: ['<', '>']
        });
    }
    
    
    
    // GIRAFE SLIDER
    if ($('.owl-carousel').length > 0) {
        $('.girafe-slider').owlCarousel({
            loop: true,
            margin: 10,
            items: 1,
            nav: true,
            dots: false,
            navText: ['<', '>']
        });
    }
    
    
    
    
    
    

});