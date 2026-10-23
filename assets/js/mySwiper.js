var swiper = new Swiper(".hero", {
    loop: true,
    speed: 600,
    navigation: {
        nextEl: ".hero .swiper-button-next",
        prevEl: ".hero .swiper-button-prev",
    },
    pagination: {
        el: ".hero .swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".slider2", {
    loop: true,
    slidesPerView: 1.4,
    spaceBetween: 12,
    pagination: {
        el: ".slider2 .swiper-pagination",
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

// 공지사항
// 공지사랑 탭메뉴
const tabList = document.querySelectorAll(".notice > ul > li > a");
const tabContents = document.querySelectorAll(".notice > ul > li > ul");

// 전부 숨기고, active만 보이기
tabContents.forEach((ul) => {
    ul.style.display = "none";
});
document.querySelector(".notice > ul > li.active > ul ").style.display = "block";
// tabContents[0].style.display = "block";

tabList.forEach((a) => {
    a.addEventListener("click", (e) => {
        e.preventDefault();

        //모든 메뉴 active를 제거하고 전체 컨텐츠 숨기기
        tabList.forEach((item) => {
            item.parentElement.classList.remove("active");
            item.nextElementSibling.style.display = "none";
        });

        // 클릭한 것만 active + 해당하는 컨텐츠가 보이기
        a.parentElement.classList.add("active");
        a.nextElementSibling.style.display = "block";
    });
});
