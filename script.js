const arrowsCodesToColorsMapping = { ArrowLeft: 'white', ArrowRight: 'black' }

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
    if (event.repeat) { return }
    
    element = event.key ?
        document.getElementById(`${arrowsCodesToColorsMapping[event.key]}-button`)
    :
        event.target

    
    element.classList.add('pressdown')
}

function handlePressUp(event) {

    element = event.key ?
        document.getElementById(`${arrowsCodesToColorsMapping[event.key]}-button`)
    :
        event.target
    
    element.classList.remove('pressdown')
}

addEventListener('DOMContentLoaded', () => {
    addEventListener('keydown', (event) => {
        handlePressDown(event)
    })
    
    addEventListener('keyup', (event) => {
        handlePressUp(event)
        handleColorChoice(arrowsCodesToColorsMapping[event.key])
    })
})