const rollDiceButton = document.querySelector("#btn-dado")

const rollDice = () => {
    const MIN_DICE_NUMBER = 1
    const MAX_DICE_NUMBER = 6
    let randomRollDiceNumber = Math.floor(Math.random() * MAX_DICE_NUMBER) + MIN_DICE_NUMBER

    alert (`El número es el:  ${randomRollDiceNumber}`)
    return randomRollDiceNumber
    
}

rollDiceButton.addEventListener('click',rollDice)