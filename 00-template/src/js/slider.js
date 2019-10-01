let sliderTimer = null;

window.onload = () => {
    const slides = document.querySelectorAll('.slider--slide');
    const tabs = document.querySelectorAll('.slider--tab');
    const SLIDE_ACTIVE = 'slider--slide__active';
    const TAB_ACTIVE = 'slider--tab__active';

    function clearActiveElements() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList = [...slides[i].classList].filter(cls => cls !== SLIDE_ACTIVE).join(' ');
            tabs[i].classList = [...tabs[i].classList].filter(cls => cls !== TAB_ACTIVE).join(' ');
        }        
    }

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].onclick = e => {
            if ([...tabs[i].classList].indexOf(TAB_ACTIVE) >= 0) {
                return;
            }
            clearActiveElements();
            slides[i].classList = [...slides[i].classList, SLIDE_ACTIVE].join(' ');
            tabs[i].classList = [...tabs[i].classList, TAB_ACTIVE].join(' ');
        }
    }
}