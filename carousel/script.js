const scrollableContainer = document.querySelector('.scroll-container');
const scrollLeftBtn = document.querySelector('.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-right');

const scrollAmount = 339 + 20; // card width + gap

scrollLeftBtn.addEventListener('click', () => {
    scrollableContainer.scrollBy({left: -scrollAmount, behavior: 'smooth'}); // left = width + gap
});

scrollRightBtn.addEventListener('click', () => {
    scrollableContainer.scrollBy({left: scrollAmount, behavior: 'smooth'}); // left = width + gap
});