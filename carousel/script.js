const scrollableContainer = document.querySelector('.scroll-container');
const scrollLeftBtn = document.querySelector('.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-right');

scrollLeftBtn.addEventListener('click', () => {
    scrollableContainer.scrollBy({left: -359, behavior: 'smooth'}); // left = width + gap
});

scrollRightBtn.addEventListener('click', () => {
    scrollableContainer.scrollBy({left: 359, behavior: 'smooth'}); // left = width + gap
});