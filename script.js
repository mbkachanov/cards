const defaultCardColor = 'linear-gradient(to right, #ffffff, #080b0f)';

function handleButtonClick(color) {
    let cardColor = Math.random() <= 0.5 ? 'white' : 'black';

    changeCardColor(cardColor);
    indicateCorrectness(cardColor === color);
    returnToInitialState();
}

function changeCardColor(color) {
    document.getElementById('card').style.background = color;
}

function indicateCorrectness(isCorrect) {
    const mapper = {
        true: { headerText: 'Correct!', color: 'green' },
        false: { headerText: 'Incorrect!', color: 'red'}
    };

    document.getElementById('header').innerText = mapper[isCorrect].headerText;
    document.getElementById('header').style.color = mapper[isCorrect].color;
}

function returnToInitialState() {
    setTimeout(() => {
        document.getElementById('header').innerText = 'What is the color of the next card?';
        document.getElementById('card').style.background = defaultCardColor;
        document.getElementById('header').style.color = 'black';
    }, 1000);
}