//initial variables
const question = document.querySelector('#question');
const choices = Array.from( document.querySelector('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progreeeBarFull = document.querySelector('#progressBArFull');
//create input variables
var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;

//create an item to store questions-answers

var questions = [
    {
        question: ' what is js?',
        choiceA:'blah',
        choiceB:'blah',
        choiceC:'blah', 
        choiceD:'blah',
        answer: 'blah',
    },
    {
        question: ' what is js?',
        choiceA:'blah',
        choiceB:'blah',
        choiceC:'blah', 
        choiceD:'blah',
        answer: 'blah',
    },
];

const scorePoint = 100
const maxQuestion = 4

startGame = () =>{
    questionCounter= 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion()
}

getNewQuestion = () =>{
    if(availableQuestions.length === 0 || questionCounter> maxQuestion){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assignment('/end.html')
    }
    questionCounter++
    progressTextText.innerText = `Question ${questionCounter} of ${maxQuestion}`
    progressBarFull.style.width =`${(questionCounter/maxQuestion) * 100}%`
    const questionIndex = Math.floor(Math.random()*availablequestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice =>{
        const number = choice.dataset['number']
        choice.innerText = currentQuestion ['choice'+ number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice =>{
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return

        acceptingAnswers = falseconst selectedChoice = e.target
        const selectedAnswer - selectedChoice.dataset ['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct'){
            incrementScore(scorePoints)


        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = nim =>{
    score +=num
    scoreText.innerText = score

}
startGame()