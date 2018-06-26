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

    $('#accordion .card:first-child() h5').css('border-bottom', 'none');
    $('#accordion .btn').click(function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('accordion-border');
    });



    //OWL-CAROUSEL
    if ($('.owl-carousel').length > 0) {
        // HEADER SLIDER
        $('.authors-slider').owlCarousel({
            loop: true,
            margin: 10,
            items: 1,
            nav: true,
            dots: false,
            navText: ['<', '>']
        });

        // CLASSIC SLIDER
        $('.classic-slider').owlCarousel({
            loop: true,
            margin: 10,
            items: 1,
            nav: true,
            dots: false,
            navText: ['<', '>']
        });

        // BRANDS SLIDER
        $('.brands-slider').owlCarousel({
            loop: true,
            margin: 10,
            items: 6,
            nav: true,
            dots: false,
            navText: ['<', '>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 4
                },
                768: {
                    items: 5
                },
                992: {
                    items: 6
                }
            }
        });

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

    }








});



