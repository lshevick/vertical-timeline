const cards = document.querySelectorAll('.timeline-card');
const button = document.querySelectorAll('.more-button');
const more = document.querySelectorAll('.more-info')

function elementInView(e) {
    let rect = e.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left >= 0 &&
        rect.right >= 0 
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

for (let i = 0; i < button.length; i++) {
    button[i].onclick = function() {
        // for (let i = 0; i < more.length; i++) {
            if (more[i].className === 'more-info open') {
                more[i].classList.remove('open');
                button[i].innerHTML = 'More';
            } else {
                more[i].classList.add('open');
                button[i].innerHTML = 'Less'
            }
        // }
        
    }   
}
window.addEventListener('load', showCard);
window.addEventListener('scroll', showCard);
