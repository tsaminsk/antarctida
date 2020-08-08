const mapStyles = [
    // { elementType: 'geometry', stylers: [{ color: '#c7d9e7' }] },
    // { "elementType": 'labels.text.fill', "stylers": [{ "color": '#011629' }] },
    // {
    //     "featureType": "administrative",
    //     "elementType": "labels.text.fill",
    //     "stylers": [
    //         {
    //             "color": "#444444"
    //         }
    //     ]
    // },
    // {
    //     "featureType": "landscape",
    //     "elementType": "all",
    //     "stylers": [
    //         {
    //             "color": "#f2f2f2"
    //         }
    //     ]
    // },
    // {
    //     "featureType": 'poi', // административные территории и здания (больницы, стадионы, кладбища)
    //     "elementType": 'geometry',
    //     "stylers": [{ "color": '#c7d9e7' }]
    // },
    // {
    //     "featureType": "road",
    //     "elementType": 'geometry',
    //     "stylers": [{ "color": '#ffffff' }]
    // },
    // {
    //     "featureType": "road.highway",
    //     "elementType": "all",
    //     "stylers": [
    //         {
    //             "visibility": "simplified"
    //         }
    //     ]
    // },
    // {
    //     "featureType": "road.arterial",
    //     "elementType": 'geometry',
    //     "stylers": [{ "color": '#bdd0e1' }]
    // },
    // {
    //     "featureType": "transit",
    //     "elementType": "all",
    //     "stylers": [
    //         {
    //             "visibility": "off"
    //         }
    //     ]
    // },
    // {
    //     "featureType": "water",
    //     "elementType": "all",
    //     "stylers": [
    //         {
    //             "color": "#46bcec"
    //         },
    //         {
    //             "visibility": "on"
    //         }
    //     ]
    // }

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
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#a6cbe9"
            },
            {
                "visibility": "on"
            }
        ]
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

    const $bgprlx = $('[data-type="background-paralax"]')
    $(window).scroll(function () {
        const topScroll = $(window).scrollTop()
        if (topScroll <= 800) {
            const yPos = 65 - $(window).scrollTop() / 150
            $bgprlx.css({ top: yPos + '%' })
        }
    })

    $('.js-contacts-map-open').on('click', function () {
        $('.js-contacts-map-wrapper').addClass('is-open')
    })

    $('.js-contacts-map-close').on('click', function () {
        $('.js-contacts-map-wrapper').removeClass('is-open')
    })

    // nav scrolling
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function (e) {
        $('html,body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
        e.preventDefault();
    });

    $('button.js-scroll-trigger').click(function (e) {
        $('html,body').stop().animate({ scrollTop: $($(this).data('href')).offset().top }, 1000);
        e.preventDefault();
    });

    initMap('map2', coordinates2, 13, addresses)

    initMap('map', coordinates, 18, [{ position: coordinates, name: 'Антарктида' }])

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

    // auth
    // $().changeAuth();

    // $('.js-open-popup').on('click', function (e) {
    //     e.preventDefault();

    //     let type = $(this).data('popup')
    //     if (type === 'reg') {
    //         openPopup('auth', 1)
    //     } else {
    //         openPopup(type, 0)
    //     }
    // });

    // function openPopup(type, id = 0) {

    //     if ($('.header').hasClass('is-open')) {
    //         $('.header').removeClass('is-open');
    //         $('.js_dropdown').fadeOut(250);
    //     }

    //     $('.js-popup').find('.popup__item').hide()
    //     $('.js-popup').find(`[data-popup="${type}"]`).show()

    //     if (type === 'auth') {
    //         $('.js-popup').fadeIn(300).find('.popup__tabs-item').eq((id + 1) % 2).removeClass('active');
    //         $('.js-popup').find('.popup__tabs-item').eq(id).addClass('active');

    //         if (id === 1) {
    //             $('.js-popup').find('.popup__footer').hide()
    //         }

    //         // if ($(window).innerWidth() <= 900) {
    //         //     // popup back
    //         //     $('.js-popup-back').unbind('click').on('click', function () {
    //         //         $('.js-popup').fadeOut(300);
    //         //     })
    //         // }
    //     } else {
    //         $('.js-popup').fadeIn(300)
    //     }

    // }

    // $('.js-exit').exitAuth()

    // // popup
    // $('.js-popup').popupFunc();

    // // select
    // $('.select').find('.select__name').on('click', function() {
    //     $(this).parent().toggleClass('is-open').find('.select__body').slideToggle(250);
    // });

    // // open menu
    // $('.js_open-menu').on('click', function(e) {
    //     if ($('.header').hasClass('is-open')) {
    //         $('.header').removeClass('is-open');
    //         $('.js_dropdown').fadeOut(250);
    //     }else{
    //         $('.header').addClass('is-open');
    //         $('.js_dropdown').fadeIn(250);
    //         if ($(window).innerWidth() <= 900) {
    //             const auth = localStorage.getItem('authUser');
    //             if (auth != null) {
    //                 $('.js_dropdown').find('.header__dropdown-button .btn').hide()
    //                 $('.js_dropdown').find('.header__dropdown-button .header__user').css('display', 'flex')
    //             } else {
    //                 $('.js_dropdown').find('.header__dropdown-button .btn').show()
    //                 $('.js_dropdown').find('.header__dropdown-button .header__user').hide()
    //             }
    //         }
    //     }
    // });

    // $('.js_dropdown').setDropdown()

    // // header fixed
    // $().showHeader();
    // $(window).on('scroll', function() {
    //     $().showHeader();
    // });

    // // favorites - избранное
    // $('.js-favorites-button').on('click', function() {
    //     $('.js-favorites-content').fadeToggle(300);
    // })

    // $('.js_popular-slider').slidersimple();
    // $('.js_detail-slider').sliderWPagination();
    // $('.js_detail-slider-2').sliderWPagination();

    // // tabs
    // $('.js_tabs').mytabs();

    // // navigation in cabinet and blog
    // if ($('.js-cabinet').length == 1) {
    //     const cabinetMenu = $('.js-cabinet').find('.about__nav-item');
    //     const cabinetContent = $('.js-cabinet').find('.about__content');
    //     let hash = document.location.hash.slice(1);

    //     const back = $('.js-cabinet').find('.back')

    //     $(back).on('click', function() {
    //         changeRoute('')
    //     })

    //     const changeRoute = function(hsh) {
    //         $(cabinetMenu).removeClass('active').toArray().forEach(el => $(el).find('a').attr('href').split('#')[1] == hsh ? $(el).addClass('active') : null);
    //         $(cabinetContent).removeClass('active').toArray().forEach(el => $(el).attr('data-nav') == hsh ? $(el).addClass('active') : null);

    //         if ($(window).innerWidth() <= 900 && $(cabinetMenu).hasClass('active')) {
    //             $(back).addClass('active')
    //             $('.js-cabinet').find('.about__title').hide()
    //             $('.js-cabinet').find('.about__mobinfo').hide()
    //             $('.js-cabinet').find('.about__nav').hide()
    //             $('.js-cabinet').find('.about__content.active').show()

    //         } else if (!$(cabinetMenu).hasClass('active')) {
    //             $(back).removeClass('active')
    //             $('.js-cabinet').find('.about__title').show()
    //             $('.js-cabinet').find('.about__mobinfo').show()
    //             $('.js-cabinet').find('.about__nav').show()
    //             $('.js-cabinet').find('.about__content').hide()
    //             document.location.hash = ''
    //         }
    //     }

    //     const setActivIfNotMobile = function() {
    //         if ($(window).innerWidth() <= 900) {
    //             $(cabinetMenu).eq(0).find('a').text('РЕДАКТИРОВАТЬ ПРОФИЛЬ')
    //             $(cabinetMenu).removeClass('active')
    //             $(cabinetContent).removeClass('active')
    //             document.location.hash = ''
    //         } else if (!$(cabinetMenu).hasClass('active')) {
    //             $(cabinetMenu).eq(0).find('a').text('ПРОФИЛЬ')
    //             $(back).removeClass('active')
    //             $(cabinetMenu).eq(0).addClass('active')
    //             $(cabinetContent).eq(0).addClass('active').show()
    //             document.location.hash = '#profile'
    //         }
    //     }

    //     hash != '' ? changeRoute(hash) : null;

    //     setActivIfNotMobile()

    //     window.addEventListener('hashchange', function (e) {
    //         hash = document.location.hash.slice(1);
    //         if (hash !== 'exit') changeRoute(hash);
    //         // else {
    //         //     document.location.href = '/';
    //         //     localStorage.removeItem('authUser');
    //         // }
    //     });

    //     window.addEventListener('resize', setActivIfNotMobile)

    //     const mobInfoName = $('.js-cabinet').find('.about__mobinfo-name')
    //     $(mobInfoName).attr('data-letter', $(mobInfoName).text()[0])
    // }

    // //- set cart height in catalog (карточки одинаковой высоты)
    // $('.main__block').setHeights();
    // $(window).on('resize', $('.main__block').setHeights());

    // //- каталог, открытие карты
    // $('.js-section-wmap').toggleMap();

    // //- footer, open links
    // $('.footer__item-title').on('click', function () {
    //     if ($(window).innerWidth() <= 900) {
    //         $(this).parent().find('.footer__item-links').fadeToggle(300)
    //     }
    // })

    // //- open user menu
    // $('.js_open-user-menu').on('click', function(e) {
    //     if (e.target.classList[0] !== 'header__user-menu_balans') $(this).find('.header__user-menu').fadeToggle(300)
    // })
};

(function ($) {

    $.fn.setDropdown = function () {
        const dropdown = $(this)
        const drMenu = $(this).find('.header__dmenu')
        // const drButton = $(this).find('.header__dropdown-button')
        const drBack = $(this).find('.header__dropdown-menu_back .back')
        const drTopMenu = $(this).find('.header__dropdown-topmenu')
        const drFooter = $(this).find('.header__dropdown-footer')
        const itemsMenu = $(dropdown).find('.header__dmenu-item')
        const itemsContent = $(dropdown).find('.header__dcontent')

        var currentContentOpen;

        $(itemsMenu).toArray().forEach((el, i) => {
            $(el).on('click', function() {
                if ($(window).innerWidth() > 900) {
                    $(itemsMenu).removeClass('active')
                    $(this).addClass('active')
                    $(itemsContent).removeClass('active')
                    $(itemsContent).eq(i).addClass('active')
                } else {
                    currentContentOpen = i
                    $(itemsMenu).hide().eq(i).show()
                    // $(drMenu).hide()
                    // $(drButton).hide()
                    $(drTopMenu).hide()
                    $(drFooter).hide()
                    $(drBack).addClass('active')
                    $(itemsContent).eq(currentContentOpen).show()
                }
            })
        })

        $(drBack).on('click', function() {
            $(itemsMenu).show()
            // $(drMenu).show()
            // $(drButton).show()
            $(drTopMenu).show()
            $(drFooter).show()
            $(this).removeClass('active')
            $(itemsContent).eq(currentContentOpen).hide()
        })

        

        // 
        setParams()

        $(window).on('resize', setParams)

        function setParams() {
            if ($(window).innerWidth() <= 900) {
                $(itemsMenu).removeClass('active')
                $(itemsContent).removeClass('active')

                $(drTopMenu).find('ul li a').on('click', function () {
                    $('.header').removeClass('is-open');
                    $('.js_dropdown').fadeOut(250);
                })
            } else {
                $(itemsMenu).eq(0).addClass('active')
                $(itemsContent).eq(0).addClass('active')

                $(drTopMenu).find('ul li a').unbind('click')
            }
        }
    }

    $.fn.showHeader = function () {
        if ($(window).innerWidth() < 1024) return false;
        if (window.pageYOffset >= 84) {
            $('.header').addClass('header--fixed');
            $('body').addClass('is-scroled');
        } else {
            $('.header').removeClass('header--fixed');
            $('body').removeClass('is-scroled');
        }
    }

    $.fn.popupFunc = function () {
        const _this = this
        const tabs = $(this).find('.popup__tabs-item');
        $(tabs).toArray().forEach((tab, id) => {
            $(tab).on('click', () => {
                $(tabs).toggleClass('active');
                if (id === 0) $(this).find('.popup__footer').show()
                else $(this).find('.popup__footer').hide()
            })
        });

        const nameInput = $(this).find('input[name=user-name]');
        const nameError = $(this).find('.popup__input-error[data-type=user-name]');

        $(nameInput).on('focus', () => {
            if ($(nameError).hasClass('active')) $(nameError).removeClass('active');
        });

        const emailInput = $(this).find('input[name=user-email]');
        const emailError = $(this).find('.popup__input-error[data-type=user-email]');

        $(emailInput).on('focus', () => {
            if ($(emailError).hasClass('active')) $(emailError).removeClass('active');
        });

        const form = $(this).find('form');
        $(form).on('submit', e => {
            e.preventDefault();
            let errors = 0;
            let name = $(nameInput).val();
            if (name.length < 3) {
                $(nameError).addClass('active');
                errors++;
            }
            let email = $(emailInput).val();
            if (!$().validEmail(email)) {
                $(emailError).addClass('active');
                errors++;
            }
            if (errors == 0) {
                // submit
                console.log(name, email);
                localStorage.setItem('authUser', JSON.stringify({name, email}));
                $().changeAuth();
                $(this).fadeOut(500);
            } else return false;
        })

        const close = $(this).find('[data-popup="close"]');
        $(close).on('click', e => {
            e.preventDefault();
            // $("html, body").css("overflow-y", "auto");
            $(this).fadeOut(500);
        });
    }

    $.fn.validEmail = function (email) {
        const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return res.test(email);
    }

    $.fn.toggleMap = function () {
        const btn = $(this).find('.js-open-map');
        const mapIsOpen = localStorage.getItem('mapIsOpen') || 'false';

        if (!$(this).hasClass('active') && mapIsOpen == 'true') {
            $(this).addClass('active');
            $(btn).find('span').text('Скрыть карту');
        }

        btn.on('click', () => {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(btn).find('span').text('Карта');
                localStorage.removeItem('mapIsOpen')
            } else {
                $(this).addClass('active');
                $(btn).find('span').text('Скрыть карту');
                localStorage.setItem('mapIsOpen', 'true')
            }
        });
    }

    $.fn.setHeights = function() {
        const $list = this;
        const $items = $list.find('.cart');
        $items.css('height', 'auto');

        const perRow = Math.floor($list.width() / $items.width());
        if (perRow !== null || perRow >= 2) {
            for (let i = 0, j = $items.length; i < j; i += perRow) {
                let maxHeight = 0,
                    $row = $items.slice(i, i + perRow);

                $row.each(function () {
                    let itemHeight = parseInt($(this).outerHeight());
                    if (itemHeight > maxHeight) maxHeight = itemHeight;
                });
                $row.css('height', maxHeight);
            }
        }
    }

    $.fn.changeAuth = function () {
        let auth = localStorage.getItem('authUser');
        $('.header__user').removeClass('active');
        if (auth != null) {
            const {name, email} = JSON.parse(auth);
            $('.header__user-logo').text(name[0].toUpperCase());
            $('.header__user-name span').text(name);
            $('.header__user').eq(0).addClass('active')
        } else {
            $('.header__user').eq(1).addClass('active');
        }
        return this
    }

    $.fn.exitAuth = function () {
        $(this).on('click', function (e) {
            e.preventDefault()
            localStorage.removeItem('authUser');
            $('.header__user-logo').text('');
            $('.header__user-name span').text('');
            $('.header__user').toggleClass('active');

            if ($('.header').hasClass('is-open')) {
                $('.header').removeClass('is-open');
                $('.js_dropdown').fadeOut(250);
            }

            window.location.replace('/')
        })
        return this
    }

    $.fn.mytabs = function () {
        const tabs = $(this);
        const links = $(tabs).find('[data-tabs="links"]').children();
        const items = $(tabs).find('[data-tabs="items"]').children();
        var currentItem = 0;

        for (let i  = 0; i < links.length; i++) {
            $(links[i]).on('click', function () {
                $(links[currentItem]).removeClass('active');
                $(items[currentItem]).removeClass('active');
                currentItem = i;
                $(links[currentItem]).addClass('active');
                $(items[currentItem]).addClass('active');
            });
        }

        if ($(window).innerWidth() <= 900) {
            $(items).removeClass('active');

            for (let i = 0; i < items.length; i++ ){
                $(items[i]).find('.main-detail__tabs-item_title').on('click', function() {
                    if ($(this).parent().hasClass('active')) {
                        $(this).parent().removeClass('active').find('.main-detail__tabs-item_text').slideUp(300);
                    } else {
                        $(items).removeClass('active').find('.main-detail__tabs-item_text').slideUp(300);
                        $(this).parent().addClass('active').find('.main-detail__tabs-item_text').slideDown(300);
                    }
                });
            }
        }
        return this
    }

    $.fn.slidersimple = function () {
        const slider = $(this);
        const arrowLeft = $(slider).find('[data-toggle="-1"]');
        const arrowRight = $(slider).find('[data-toggle="1"]');
        const body = $(slider).find('[data-slider="body"]');
        const itemsArray = $(body).children();
        const arrow = $(slider).find('[data-toggle]');
        var sliderWidth = $(slider).innerWidth();
        var itemOuterWidth = $(itemsArray[0]).outerWidth(true);
        var itemOnOneStep = Math.floor(sliderWidth / itemOuterWidth);
        var pixelsOnOneStep = itemOnOneStep * itemOuterWidth;
        var maxSteps = Math.ceil(itemOuterWidth * itemsArray.length / pixelsOnOneStep);
        $(body).width(itemOuterWidth * itemsArray.length);
        var currentStep = 0;
        $(body).css('transform', 'translate3d(0, 0, 0)');

        $(arrow).on('click', function () {
            let delta = $(this).data('toggle') * itemOnOneStep;
            moveSlider(delta, this)
        });

        $(slider).on('touchstart', function(e) {
            touchScroll(e)
        })

        const moveSlider = (delta) => {
            currentStep += delta;
            if (currentStep < maxSteps) $(arrowRight).addClass('active');
            if (currentStep > 0) $(arrowLeft).addClass('active');
            let offset = currentStep * itemOuterWidth; // текущее расчетное смещение
            let max = itemOuterWidth * itemsArray.length - pixelsOnOneStep; // максимальное вправо
            if (offset >= max) {
                offset = max;
                $(arrowRight).removeClass('active');
            }
            if (offset < pixelsOnOneStep) {
                offset = 0;
                $(arrowLeft).removeClass('active');
            }
            $(body).css('transform', 'translate3d(-' + offset + 'px, 0, 0)');
        }

        const touchScroll = (e) => {
            const target = e.changedTouches[0].target;
            const startCoord = e.changedTouches[0].screenX;
            const endHandler = e => {
                const endCoord = e.changedTouches[0].screenX;
                // движение на более чем 30 пикселей, скорее всего, намеренное
                if (Math.abs(startCoord - endCoord) > 30) {
                    if (endCoord > startCoord) {
                        moveSlider(-1);
                    } else if (endCoord < startCoord) {
                        moveSlider(1);
                    }
                }
                target.removeEventListener('touchend', endHandler);
            };
            target.addEventListener('touchend', endHandler);
        }

        return this;
    }

    $.fn.sliderWPagination = function () {
        const slider = $(this);
        const arrowLeft = $(slider).find('[data-toggle="-1"]');
        const arrowRight = $(slider).find('[data-toggle="1"]');
        const body = $(slider).find('[data-slider="body"]');
        const itemsArray = $(body).children();
        const arrow = $(slider).find('[data-toggle]');
        var itemOuterWidth = $(itemsArray[0]).outerWidth(true);
        var maxSteps = itemsArray.length - 1;
        $(body).width(itemOuterWidth * itemsArray.length);
        var currentStep = 0;
        $(body).css('transform', 'translate3d(0, 0, 0)');

        $(arrow).on('click', function () {
            let delta = $(this).data('toggle');
            currentStep += delta;
            moveSlider(currentStep);
        });

        const containerPagination = $(slider).find('[data-slider="pagination"]');
        const itemsPagination = $(containerPagination).find('>div');

        for (let i = 0; i < itemsPagination.length; i++) {
            $(itemsPagination[i]).on('click', function () {
                currentStep = i;
                moveSlider();
            });
        }

        function moveSlider() {
            if (currentStep < maxSteps) $(arrowRight).addClass('active');
            if (currentStep > 0) $(arrowLeft).addClass('active');
            if (currentStep == maxSteps) $(arrowRight).removeClass('active');
            if (currentStep == 0) $(arrowLeft).removeClass('active');
            $(body).css('transform', 'translate3d(-' + currentStep * itemOuterWidth + 'px, 0, 0)');
            $(itemsPagination).removeClass('active');
            $(itemsPagination[currentStep]).addClass('active');
        }

        $(slider).on('touchstart', function (e) {
            touchScroll(e)
        });

        function touchScroll(e) {
            console.log('tut');
            
            const target = e.changedTouches[0].target;
            const startCoord = e.changedTouches[0].screenX;
            const endHandler = e => {
                const endCoord = e.changedTouches[0].screenX;
                // движение на более чем 30 пикселей, скорее всего, намеренное
                if (Math.abs(startCoord - endCoord) > 30) {
                    if ( (endCoord > startCoord) && currentStep > 0 ) {
                        currentStep -= 1;
                        moveSlider();
                    } else if ( (endCoord < startCoord) && currentStep < maxSteps ) {
                        currentStep += 1;
                        moveSlider();
                    }
                }
                target.removeEventListener('touchend', endHandler);
            };
            target.addEventListener('touchend', endHandler);
        }
        return this;
    }
})(jQuery);
