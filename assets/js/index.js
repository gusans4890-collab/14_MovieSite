// 고정 헤더 높이만큼 본문 공간 확보
const fixedHeader = document.querySelector("#header");
const syncHeaderHeight = () => {
    document.documentElement.style.setProperty("--header-height", `${fixedHeader.getBoundingClientRect().height}px`);
};
syncHeaderHeight();
new ResizeObserver(syncHeaderHeight).observe(fixedHeader);

// 영화 차트 메뉴
const movBtn = document.querySelectorAll(".movie_title ul li");
const movCont = document.querySelectorAll(".movie_chart > div");

//  모든 무비차트를 숨기고, 첫번째만 보이기 (기본화면)
movCont.forEach((cont) => {
    cont.querySelector(".slider2").swiper.autoplay.stop();
    cont.style.display = "none";
});
movCont[0].style.display = "block";
const firstMovieSwiper = movCont[0].querySelector(".slider2").swiper;
firstMovieSwiper.update();
firstMovieSwiper.slideToLoop(0, 0, false);
firstMovieSwiper.autoplay.start();

// 이벤트 시작
movBtn.forEach((menu, index) => {
    menu.addEventListener("click", (e) => {
        e.preventDefault();

        movBtn.forEach((item) => {
            item.classList.remove("active");
        }); // 모든 버튼에서 active제거
        menu.classList.add("active"); // 클릭한 버튼만 active 추가

        movCont.forEach((cont) => {
            cont.querySelector(".slider2").swiper.autoplay.stop();
            cont.style.display = "none";
        }); // 모든 차트 숨기기
        movCont[index].style.display = "block"; // 클릭한 버튼과 같은 index 보이기
        const movieSwiper = movCont[index].querySelector(".slider2").swiper;
        movieSwiper.update();
        movieSwiper.slideToLoop(0, 0, false);
        movieSwiper.autoplay.start();
    });
});

// 모바일 메뉴
const ham = document.querySelector("#mNav .ham");
const mNavMenu = document.querySelector("#mNav ul");

ham.addEventListener("click", (e) => {
    e.preventDefault();
    const isOpen = mNavMenu.classList.toggle("active");
});

// 스크롤 이벤트

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY + window.innerHeight / 2;

    let event = document.querySelector("#event");
    let eventTop = event.offsetTop;

    if (scrollTop >= eventTop) {
        document.querySelector(".event_left").classList.add("show");
        document.querySelector(".event_right").classList.add("show");
    } else {
        document.querySelector(".event_left").classList.remove("show");
        document.querySelector(".event_right").classList.remove("show");
    }

    let opening = document.querySelector("#opening");
    let openingTop = opening.offsetTop;
    let openBox = document.querySelectorAll(".open_box > div");

    if (scrollTop > openingTop) {
        openBox.forEach((div) => div.classList.add("show"));
    } else {
        openBox.forEach((div) => {
            div.classList.remove("show");
        });
    }

    let newSection = document.querySelector("#new");
    let newSectionTop = newSection.offsetTop;

    if (scrollTop >= newSectionTop) {
        document.querySelector(".new_left").classList.add("show");
        document.querySelector(".new_right").classList.add("show");
    } else {
        document.querySelector(".new_left").classList.remove("show");
        document.querySelector(".new_right").classList.remove("show");
    }

    let help = document.querySelector("#help");
    let helpTop = help.offsetTop;
    let helpBox = document.querySelectorAll(".help > div");

    if (window.scrollY + window.innerHeight * 0.85 >= helpTop) {
        helpBox.forEach((div) => div.classList.add("show"));
    } else {
        helpBox.forEach((div) => div.classList.remove("show"));
    }
});
