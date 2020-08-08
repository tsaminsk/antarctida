const mapStyles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#011629" }]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [{ hue: "#00ffe6" }, { saturation: -20 }]
    },
    {
        "featureType": "poi",
        "elementType": 'geometry',
        "stylers": [{ "color": '#c7d9e7' }]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{"saturation": -100}, {"lightness": 45}]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{"visibility": "simplified"}]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{"visibility": "off"}]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{"visibility": "off"}]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{"color": "#a6cbe9"}, {"visibility": "on"}]
    }
]

const mapBaloon = './../assets/images/marker.png'
const mapBaloonLitle = './../assets/images/map-baloon-litle.png'
const coordinates = { lat: 51.823928, lng: 107.581690 }
const coordinates2 = { lat: 51.842483, lng: 107.647887 }

const addresses = [
    { address: 'Россия, г. Улан-удэ, ул. Ключевская 54Б', name: 'Брахма-Центр'},
    { address: 'Россия, г. Улан-удэ, ул. Тобольская 77 А блок Г', name: 'А блок Г', ballon: mapBaloonLitle },
    { address: 'Россия, г. Улан-удэ, ул. Трубачеева, 140А', name: '3', ballon: mapBaloonLitle },
    { address: 'Россия, г. Улан-удэ, проспект Автомобилистов, 8Б', name: '', ballon: mapBaloonLitle },
    { address: 'Россия, г. Улан-удэ, ул. Грушевая улица, 13', name: 'Брахма-Центр', ballon: mapBaloonLitle },
    { address: 'Россия, г. Улан-удэ, ул. 11-й проезд, 270', name: 'Брахма-Центр', ballon: mapBaloonLitle },
    { address: 'Россия, г. Улан-удэ, Ботаническая улица, 35В к2', name: 'Крокус', ballon: mapBaloonLitle },
    { address: 'Россия, г. Улан-удэ, Трактовая улица, 26', name: 'дом' },
    { address: 'Россия, г. Улан-удэ, улица Революции 1905 года, 42', name: 'Аргет', ballon: mapBaloonLitle },
    { address: 'Россия, г. Улан-удэ, Джидинская улица, 4', name: 'ч/с', ballon: mapBaloonLitle },
    { position: { lat: 51.822742, lng: 107.577927 }, name: 'Что то портовое', ballon: mapBaloonLitle }
]

window.onload = function () {

    // паралакс на банере
    const $bannerParalax = $('[data-type="background-paralax"]')
    $(window).scroll(function () {
        const topScroll = $(window).scrollTop()
        if (topScroll <= 800) {
            const yPos = 65 - $(window).scrollTop() / 150
            $bannerParalax.css({ top: yPos + '%' })
        }
    })

    // карта в контактах - окрытие на весь экран и закрытие соотв.
    $('.js-contacts-map-open').on('click', function () {
        $('.js-contacts-map-wrapper').addClass('is-open')
    })

    $('.js-contacts-map-close').on('click', function () {
        $('.js-contacts-map-wrapper').removeClass('is-open')
    })

    // nav scrolling - плавный скролл к блоку
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function (e) {
        $('html,body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
        e.preventDefault();
    });

    // map in contacts
    initMap('map', coordinates, 18, [{ position: coordinates, name: 'Антарктида' }])

    // map in "объекты компании"
    initMap('map2', coordinates2, 13, addresses)

    function initMap(id, center, zoom, markers) {

        const map = new google.maps.Map(document.getElementById(id), {
            center,
            zoom,
            disableDefaultUI: true,
            styles: mapStyles
        });

        const geocoder = new google.maps.Geocoder()

        const codeAddress = function (address) {
            return new Promise((resolve, reject) => {
                geocoder.geocode({ 'address': address }, function (results, status) {
                    if (status === 'OK') {
                        resolve({ lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() })
                    } else {
                        reject('Geocode was not successful for the following reason: ' + status)
                    }
                });
            })
        }

        const setMarker = (el) => {
            el.marker = new google.maps.Marker({
                position: el.position,
                map,
                title: el.name,
                icon: el.ballon || mapBaloon
            });
        }

        markers.forEach(el => {
            if (!el.position) {
                codeAddress(el.address)
                    .then(res => {
                        el.position = res
                        setMarker(el)
                    })
            } else setMarker(el)
        })
    }

    $('input[type="tel"]').mask('+7 (999) 999-99-99');

    $('.js-slider-projects-1').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.projects__content-arrow--left'),
        nextArrow: false
    });

    $('.js-slider-projects-2').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: false,
        nextArrow: $('.projects__content-arrow--right'),
    });

    $('.js-slider-confidence').slick({
        infinite: true,
        draggable: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: true,
        prevArrow: $('.confidence__slider-arrow--left'),
        nextArrow: $('.confidence__slider-arrow--right')
    });

    $('.js-slider-reviews').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        prevArrow: $('.reviews__slider-arrow--left'),
        nextArrow: $('.reviews__slider-arrow--right')
    });

    $('.js-slider-publication').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        prevArrow: $('.publication__slider-arrow--left'),
        nextArrow: $('.publication__slider-arrow--right')
    });

    $('.confidence__slider').sliderconfidence()

};

(function ($) {

    $.fn.validEmail = function (email) {
        const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return res.test(email);
    }

    $.fn.sliderconfidence = function () {
        const perPage = 5
        const itemOnOneStep = 1
        const slider = $(this);
        const slides = $('.js-slider-confidence').find('.slick-track').children()
        const scrollingBodyWidth = $(this).find('.confidence__slider-scrolling--body').innerWidth()
        const scrollingRunner = $(this).find('.confidence__slider-scrolling--runner')
        const arrows = $(slider).find('.confidence__slider-arrow');

        let current = 0 // текущее положение
        const steps = slides.length - perPage
        const pages = Math.ceil(slides.length / perPage)

        $(scrollingRunner).css('width', scrollingBodyWidth / pages + 'px')

        $(arrows).on('click', function () {
            if ($(this).data('active') === 'false') return false
            $(this).data('active', 'false')
            current += $(this).data('target') * itemOnOneStep
            current < 0 ? current = steps : null
            current > steps ? current = 0 : null
            $(scrollingRunner).css('transform', 'translate3d(' + current * (scrollingBodyWidth - scrollingBodyWidth / pages) / steps + 'px, 0, 0)');
            setTimeout(() => {
                $(this).data('active', 'true')
            }, 500);
        });
    }

})(jQuery);
