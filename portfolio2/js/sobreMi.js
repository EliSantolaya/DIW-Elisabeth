const cards = document.querySelectorAll('.skill-card');
let currentCard = 0;

function updateCards(direction) {
    cards[currentCard].classList.remove('active');

    if (direction === 'next') {
        currentCard = (currentCard + 1) % cards.length; // Avanza a la siguiente carta
    } else if (direction === 'prev') {
        currentCard = (currentCard - 1 + cards.length) % cards.length; // Retrocede a la carta anterior
    }

    cards[currentCard].classList.add('active');
}

const aptitudeCards = document.querySelectorAll('.aptitude-card');
let currentAptitudeCard = 0;

function updateAptitudeCards(direction) {
    aptitudeCards[currentAptitudeCard].classList.remove('active');

    if (direction === 'next') {
        currentAptitudeCard = (currentAptitudeCard + 1) % aptitudeCards.length; 
    } else if (direction === 'prev') {
        currentAptitudeCard = (currentAptitudeCard - 1 + aptitudeCards.length) % aptitudeCards.length; 
    }
    aptitudeCards[currentAptitudeCard].classList.add('active');
}

document.getElementById('prev-aptitudes').addEventListener('click', () => updateAptitudeCards('prev'));
document.getElementById('next-aptitudes').addEventListener('click', () => updateAptitudeCards('next'));


document.getElementById('prev').addEventListener('click', () => updateCards('prev'));
document.getElementById('next').addEventListener('click', () => updateCards('next'));


