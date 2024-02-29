function handleButtonClick(color) {
    let cardColor = Math.random() <= 0.5 ? 'white' : 'black';

    changeCardColor(cardColor);
    indicateCorrectness(cardColor === color);
    returnToInitialState();
}

function changeCardColor(color) {
    document.getElementById('card').className = color;
}

function indicateCorrectness(isCorrect) {
    const mapping = {
        true: { color: '#00be56' },
        false: { color: '#752525'},
    };

    document.getElementById('header').style.color = mapping[isCorrect].color;
    document.getElementById('header').style.className += ` ${isCorrect ? 'correct' : 'wrong'}`;

    document.getElementById('card').className += ` ${isCorrect ? 'correct' : 'wrong'}`;
}

function returnToInitialState() {
    setTimeout(() => {
        document.getElementById('card').className = 'unknown';
        document.getElementById('header').style.color = '#2a2a2a';
    }, 1000);
}