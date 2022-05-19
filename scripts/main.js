const cards = document.querySelectorAll('.timeline-card');

function elementInView(e) {
    let rect = e.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left >= 0 &&
        rect.right >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function showCard() {
    for (let i = 0; i < cards.length; i++) {
        if (elementInView(cards[i])) {
            cards[i].classList.add('in-view');
        } else {
            cards[i].classList.remove('in-view');
        }
    }
}

window.addEventListener('load', showCard);
window.addEventListener('scroll', showCard);
