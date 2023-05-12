
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
    speed: 1000,
    spaceBetween: 30,
    centeredSlides: true,
    dynamicBullects: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        // pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    // effect: 'cards', // cube, fade, cards
    effect: 'creative',
    creativeEffect: {
        prev: {
            // will set `translateZ(-400px)` on previous slides
            translate: [0, 0, -400],
        },
        next: {
            // will set `translateX(100%)` on next slides
            translate: ['100%', 0, 0],
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // on: {
    //     autoplayTimeLeft(s, time, progress) {
    //         progressCircle.style.setProperty("--progress", 1 - progress);
    //         progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    //     }
    // }
});