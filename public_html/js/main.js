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


    // TOGGLE CLASS UNDERLINE PINK
    $('.shop-products-dropdown li ul li').hover(function (e) {
        e.preventDefault();
        $(this).toggleClass('font-bold');
        $(this).parent().prev().children().toggleClass('underline-pink');
    });

    $('.gift-dropdown li').hover(function (e) {
        e.preventDefault();
        $(this).find('h6').toggleClass('underline-pink');
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // QUESTINS_ANSWERS
    
    
    
    
});