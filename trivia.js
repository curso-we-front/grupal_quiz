const rollDiceButton = document.querySelector("#btn-dado")
const numberContainer = document.querySelector("#numero-obtenido")

const rollDice = () => {
    
    const MIN_DICE_NUMBER = 1
    const MAX_DICE_NUMBER = 6
    let randomRollDiceNumber = Math.floor(Math.random() * MAX_DICE_NUMBER) + MIN_DICE_NUMBER

    numberContainer.innerHTML = `El número obtenido es el: ${randomRollDiceNumber}`
    
}

rollDiceButton.addEventListener('click',rollDice)