function handleButtonClick(color) {
    let cardColor = Math.random() <= 0.5 ? 'white' : 'black';

    document.getElementById('card').className = cardColor;

    indicateCorrectness(cardColor === color);
    returnToInitialState();
}

function indicateCorrectness(isCorrect) {
    let className = ` ${isCorrect ? 'correct' : 'wrong'}`
    document.getElementById('header').className += className;
    document.getElementById('card').className += className;
}

function returnToInitialState() {
    setTimeout(() => {
        document.getElementById('card').className = 'standard';
        document.getElementById('header').className = 'standard'
    }, 1000);
}