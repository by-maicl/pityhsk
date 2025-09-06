const gallery = document.querySelector('.about__slider');
const items = Array.from(gallery.children);
const itemHeight = 370;
const itemCount = items.length;

items.forEach(img => {
    gallery.appendChild(img.cloneNode(true));
});
items.slice().reverse().forEach(img => {
    gallery.insertBefore(img.cloneNode(true), gallery.firstChild);
});

gallery.scrollTop = itemCount * itemHeight;

gallery.addEventListener('scroll', () => {
    if (gallery.scrollTop >= (itemCount * 2) * itemHeight) {
        gallery.scrollTop = itemCount * itemHeight;
    }

    if (gallery.scrollTop <= 0) {
        gallery.scrollTop = itemCount * itemHeight;
    }
});

document.querySelector('.gallery__button-down').addEventListener('click', () => {
    gallery.scrollBy({ top: itemHeight, behavior: 'smooth' });
});

document.querySelector('.gallery__button-up').addEventListener('click', () => {
    gallery.scrollBy({ top: -itemHeight, behavior: 'smooth' });
});

function checkInputValue(elementId) {
    const input = document.getElementById(elementId);
    const placeholder = document.getElementById(elementId + 'Plh');

    if (input.value.trim() !== '') {
        placeholder.style.top = 0;
        placeholder.style.fontSize = '14px';
    } else {
        placeholder.style.top = '50%';
        placeholder.style.fontSize = '18px';
    }
}

function smothScroll(scrollTo) {
    document.getElementById(scrollTo).scrollIntoView({
        behavior: 'smooth'
    });
}

function openOrCloseBurgerMenu(operation) {
    const btnOpen = document.getElementById('burgerOpen');
    const btnClose = document.getElementById('burgerClose');
    const menu = document.getElementById('mobileMenu');

    switch (operation) {
        case 'open':
            btnOpen.style.display = 'none';
            btnClose.style.display = 'block';

            menu.style.height = '100vh';
            menu.style.opacity = 1;

            document.body.style.overflow = 'hidden';
            break;

        case 'close':
            btnOpen.style.display = 'block';
            btnClose.style.display = 'none';

            menu.style.opacity = 0;
            menu.style.height = '0';

            document.body.style.overflow = 'auto';
            break;
        default:
            break;
    }
}

// checkInputValue('inputName');

/* function createSliderButtons() {
    const parentEl = document.getElementById('parentButtonSlider');

    for (let i = 0; i < itemCount; i++) {
        let newButton = document.createElement('button');
        newButton.classList.add('button-slider');
        newButton.setAttribute('data-target', 'img' + (i + 1))

        parentEl.appendChild(newButton);
    }
}

createSliderButtons(); */
