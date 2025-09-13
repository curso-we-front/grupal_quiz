const rollDiceButton = document.querySelector("#btn-dado")
const numberContainer = document.querySelector("#numero-obtenido")
const questionShowed = document.querySelector("#pregunta")
const answersContainer = document.querySelector("#opciones")
const firstOptionButton = document.querySelector("#first-option")
const secondOptionButton = document.querySelector("#second-option") 
const thridOptionButton = document.querySelector("#thrid-option")  
const fourthOptionButton = document.querySelector("#fourth-option")
const HIDE_VIEW_OPTIONS_TEXT = "none"
const SHOW_VIEW_OPTIONS_TEXT = "grid" 



const rollDice = () => {
    
    const MIN_DICE_NUMBER = 1
    const MAX_DICE_NUMBER = 6
    let randomRollDiceNumber = Math.floor(Math.random() * MAX_DICE_NUMBER) + MIN_DICE_NUMBER

    numberContainer.innerHTML = `El número obtenido es el: ${randomRollDiceNumber}`
    showQuestion(randomRollDiceNumber)
    const answersMixed = mixAnswersToQuestion(randomRollDiceNumber)
    showAnswers(answersMixed)
} 

function hideViewAnswers() {
    answersContainer.style.display = HIDE_VIEW_OPTIONS_TEXT
}

function showQuestion(randomRollDiceNumber) { 
    const questionSelected = questions.filter((question) => (question.id === randomRollDiceNumber))
    questionShowed.innerText = questionSelected[0].statement
} 

function mixAnswersToQuestion(randomRollDiceNumber) { 
    const questionSelected = questions.filter((question) => (question.id === randomRollDiceNumber)) 
    const answersSelected = questionSelected[0].options 
    answersSelected.sort(() => Math.random() - 0.5)
    return answersSelected 
}

function showAnswers(answersMixed) {
    const optionsButtons = [firstOptionButton, secondOptionButton, thridOptionButton, fourthOptionButton]
    optionsButtons.forEach((optionButton, index) => {
        optionButton.innerText = answersMixed[index]
    })
    answersContainer.style.display = SHOW_VIEW_OPTIONS_TEXT
} 

hideViewAnswers()
rollDiceButton.addEventListener("click", rollDice)
