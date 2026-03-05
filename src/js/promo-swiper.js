const track = document.querySelector('.promo__slider-track');
const slides = document.querySelectorAll('.promo__slide');
const pagination = document.querySelector('.promo__pagination');

let current = 0;

slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('pagination-bullet');

    if (index === 0) {
        dot.classList.add('active');
    }

    pagination.append(dot);

    dot.addEventListener('click', () => {
        current = index;
        updateSlider();
    });
});

const dots = document.querySelectorAll('.pagination-bullet');

function updateSlider() {

    if (window.innerWidth >= 700) {
        track.style.transform = `translateY(-${current * 21}%)`;
    }

    if (window.innerWidth <= 700) {
        track.style.transform = `translateX(-${current * 155}%)`;
    }

    dots.forEach(dot => dot.classList.remove('active'));
    dots[current].classList.add('active');

}

setInterval(() => {

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    updateSlider();

}, 3000);