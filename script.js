function handleColorChoice(guessedColor) {
    let randomColor = Math.random() <= 0.5 ? 'white' : 'black'
    let correctness = randomColor === guessedColor ? 'correct' : 'wrong'

    changeCardClass([randomColor, correctness])
    changeHeaderClass(correctness)
    returnToInitialState()
}

function changeCardClass(classNames = []) {
    document.getElementById('card').className = classNames.join(' ')
}

function changeHeaderClass(className) {
    document.getElementById('header').className = className
}

function returnToInitialState() {
    setTimeout(() => {
        changeCardClass(['standard'])
        changeHeaderClass('standard')
    }, 1000)
}