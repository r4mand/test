document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        allowTouchMove: false
    });
})