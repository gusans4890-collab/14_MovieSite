const showBtn = document.getElementById("showTrailer");
const hideBtn = document.getElementById("hideTrailer");
const blackout = document.getElementById("blackout");
const trailer = document.getElementById("trailer");

function openTrailer() {
    const videoId = showBtn.dataset.youtube;
    if (!/^[\w-]{11}$/.test(videoId)) return;

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1`;
    iframe.title = "영화 예고편";
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;
    trailer.replaceChildren(iframe);

    blackout.classList.remove("is-hidden");
    blackout.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal_on");
    hideBtn.focus();
}

function closeTrailer() {
    trailer.replaceChildren();
    blackout.classList.add("is-hidden");
    blackout.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal_on");
    showBtn.focus();
}

showBtn.addEventListener("click", openTrailer);
showBtn.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openTrailer();
    }
});
hideBtn.addEventListener("click", closeTrailer);
blackout.addEventListener("click", (event) => {
    if (event.target === blackout) closeTrailer();
});
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !blackout.classList.contains("is-hidden")) closeTrailer();
});
