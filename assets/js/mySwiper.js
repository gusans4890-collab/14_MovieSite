var swiper = new Swiper(".hero", {
    loop: true,
    speed: 600,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".slider2", {
    slidesPerView: 1.2,
    spaceBetween: 12,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        481: {
            slidesPerView: 1.4,
            spaceBetween: 20,
        },
        601: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        960: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});
