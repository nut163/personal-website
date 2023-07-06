// animations.js

document.addEventListener('DOMContentLoaded', function() {
    scrollAnimation();
    clickAnimation();
});

function scrollAnimation() {
    const scrollElements = document.querySelectorAll('[data-scroll]');

    scrollElements.forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
    });

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0px)';
        element.style.transition = 'opacity 500ms, transform 500ms';
    };

    window.addEventListener('scroll', () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    });
}

function clickAnimation() {
    const clickElements = document.querySelectorAll('[data-click]');

    clickElements.forEach((el) => {
        el.addEventListener('click', () => {
            el.classList.toggle('active');
        });
    });
}