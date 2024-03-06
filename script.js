const arrowsCodesToColorsMapping = { ArrowLeft: 'white', ArrowRight: 'black' }

function handleColorChoice(guessedColor) {
    let randomColor = Math.random() <= 0.5 ? 'white' : 'black'
    let correctness = randomColor === guessedColor ? 'correct' : 'wrong'

    if (correctness === 'correct') {
        navigator.vibrate(100)
    } else {
        navigator.vibrate([100, 50, 100])
    }

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
    if (event.repeat) { return }

    document.getElementById(`${arrowsCodesToColorsMapping[event.key]}-button`).classList.add('pressdown')
}

function handlePressUp(event) {
    document.getElementById(`${arrowsCodesToColorsMapping[event.key]}-button`).classList.remove('pressdown')
}

function handlePointerDown(event) {
    event.target.classList.add('pressdown')
}

function handlePointerUp(event) {
    event.target.classList.remove('pressdown')
}

addEventListener('DOMContentLoaded', () => {
    addEventListener('keydown', (event) => {
        if (Object.keys(arrowsCodesToColorsMapping).includes(event.key)) {
            handlePressDown(event)
        }
    })

    addEventListener('keyup', (event) => {
        if (Object.keys(arrowsCodesToColorsMapping).includes(event.key)) {
            handlePressUp(event)
            handleColorChoice(arrowsCodesToColorsMapping[event.key])
        }
    })
})