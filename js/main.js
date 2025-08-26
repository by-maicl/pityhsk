const gallery = document.querySelector('.about__slider');
const items = Array.from(gallery.children);
const itemHeight = 370;
const itemCount = items.length;

// Клонуємо елементи: спочатку і в кінець
items.forEach(img => {
    gallery.appendChild(img.cloneNode(true)); // клон до низу
});
items.slice().reverse().forEach(img => {
    gallery.insertBefore(img.cloneNode(true), gallery.firstChild); // клон вгору
});

// Встановлюємо початкову позицію (на перше оригінальне зображення)
gallery.scrollTop = itemCount * itemHeight;

// Фіксуємо нескінченну прокрутку
gallery.addEventListener('scroll', () => {
    // Якщо прокрутили занадто вниз (в клонований низ) — стрибок на оригінал
    if (gallery.scrollTop >= (itemCount * 2) * itemHeight) {
        gallery.scrollTop = itemCount * itemHeight;
    }

    // Якщо прокрутили занадто вгору (в клонований верх) — стрибок на оригінал
    if (gallery.scrollTop <= 0) {
        gallery.scrollTop = itemCount * itemHeight;
    }
});

// Кнопки прокрутки
document.querySelector('.gallery__button-down').addEventListener('click', () => {
    gallery.scrollBy({ top: itemHeight, behavior: 'smooth' });
});

document.querySelector('.gallery__button-up').addEventListener('click', () => {
    gallery.scrollBy({ top: -itemHeight, behavior: 'smooth' });
});

function checkInputValue(elementId) {
    const input = document.getElementById(elementId);
    const placeholder = document.getElementById(elementId + 'Plh')

    if (input.value.trim() !== '') {
        placeholder.style.display = 'none';
    } else {
        placeholder.style.display = 'inline';
    }
}

function smothScroll(scrollTo) {
    document.getElementById(scrollTo).scrollIntoView({
        behavior: 'smooth'
    });
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
