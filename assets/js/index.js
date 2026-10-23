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
