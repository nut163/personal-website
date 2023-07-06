```javascript
// Scroll Animation
function scrollAnimation() {
    const elements = document.querySelectorAll('.animation-scroll');

    window.addEventListener('scroll', () => {
        elements.forEach((element) => {
            const positionFromTop = element.getBoundingClientRect().top;

            if (positionFromTop - window.innerHeight <= 0) {
                element.classList.add('animate');
            }
        });
    });
}

// Click Animation
function clickAnimation() {
    const elements = document.querySelectorAll('.animation-click');

    elements.forEach((element) => {
        element.addEventListener('click', () => {
            element.classList.add('animate');
        });
    });
}

// Call the functions
scrollAnimation();
clickAnimation();
```