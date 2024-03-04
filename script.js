function handleColorChoice(guessedColor) {
    let randomColor = Math.random() <= 0.5 ? 'white' : 'black'
    let correctness = randomColor === guessedColor ? 'correct' : 'wrong'

    changeCardClass([randomColor, correctness])
    returnToInitialState()
}

function changeCardClass(classNames = []) {
    document.getElementById('card').className = classNames.join(' ')
}

function returnToInitialState() {
    setTimeout(() => {
        changeCardClass(['standard'])
    }, 1000)
}

function handlePressDown(event) {
    event.target.classList.add('pressdown')
}

function handlePressUp(event) {
    event.target.classList.remove('pressdown')
}