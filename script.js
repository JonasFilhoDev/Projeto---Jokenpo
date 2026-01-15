const result = document.querySelector(".result")
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const resetButton = document.querySelector('#reset-button')


let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPPER: 'papper',
    SCISSORS: 'scissors'
}

function playHuman(humanChoice) {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + " Adversário: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate! &#x1F631"
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'papper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou! &#x1F600"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Seu adversário ganhou! &#x1F613"
    }
}

const resetGame = () => {
    humanScoreNumber = 0
    machineScoreNumber = 0

    humanScore.innerHTML = humanScoreNumber
    machineScore.innerHTML = machineScoreNumber

    result.innerHTML = ""
}

resetButton.addEventListener('click', resetGame)