//initial variables
const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')
var timer = document.getElementById("timer")

//create input variables
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
var timeLeft = 100
var timeInterval

//create an array to store questions-answers

let questions = [
    {
        question: 'What is NOT a JavaScript data type?',
        choice1:'Number',
        choice2:'Function',
        choice3:'Boolean', 
        choice4:'Object',
        answer: 2,
    },
    {
        question: 'Which company developed JavaScript?',
        choice1:'Google',
        choice2:'Hyperlink InfoSystem',
        choice3:'Netscape', 
        choice4:'Microsoft',
        answer:3,
    },
    {
        question: 'Who created JavaScript?',
        choice1:'Steve Jobs',
        choice2:'David Heinemeier Hansson',
        choice3:'Elon Musk', 
        choice4:'Brendan Eich',
        answer: 4,
    },
    {
        question: 'Which symbol(s) are used for comments in JavaScript?',
        choice1:'//',
        choice2:'* and //',
        choice3:'/* */ and //', 
        choice4:'// and --><--',
        answer: 3,
    },
    {
        question: 'Which is NOT a type of pop up box available in JavaScript?',
        choice1:'Error',
        choice2:'Prompt',
        choice3:'Alert', 
        choice4:'Confirm',
        answer: 1,
    },
    {
        question: 'Which of the following is not a valid JavaScript variable name?',
        choice1:'helloWorld',
        choice2:'2names',
        choice3:'name2', 
        choice4:'my_name',
        answer: 2,
    },
];

//variables for the # of points and questions
const SCORE_POINT = 100
const MAX_QUESTION = 6


//function to start the game
startGame = () =>{
    questionCounter= 0;
    score = 0;
    timeLeft = 100;
    countDown()
    availableQuestions = [...questions];
    getNewQuestion()
}
//function that countsdown from 100
function countDown(){
    timeInterval = setInterval (function (){
        timeLeft --;
      timer.textContent = timeLeft;

        if(timeLeft <= 0){
            clearInterval(timeInterval);
            timer.textContent = "00"
            timesup()
        }

    }, 1000);
}

//function to change the question

getNewQuestion = () =>{
    //logs scores in local storage
    if(availableQuestions.length===0 || questionCounter > MAX_QUESTION ){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('../end/end2.html')
    };
    //adds 1 to the question counter when function is run
    questionCounter++;
    //labels what question number on out of total questions
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTION}`
    //changes how full the progress bar is depending on the question user is on
    progressBarFull.style.width =`${(questionCounter/MAX_QUESTION) * 100}%`
    //calculate value of question index
    const questionIndex = Math.floor(Math.random()*availableQuestions.length)
    //keep track of what question on
    currentQuestion = availableQuestions[questionIndex]
    //determines what question being asked
    question.innerText = currentQuestion.question

    //
    choices.forEach(choice => {
        //lets user know what choice clicking on
        const number = choice.dataset['number']
        choice.innerText = currentQuestion ['choice'+ number]
    })

    //adds number to question index
    availableQuestions.splice(questionIndex, 1)
    acceptingAnswers = true

}




choices.forEach(choice=>{
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return
      

       acceptingAnswers = false
       const selectedChoice = e.target
       const selectedAnswer = selectedChoice.dataset['number']
       //toggles the button change color for correc/incorrect
       let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
       //increases score by 100 if get answer correct
       if(classToApply === 'correct'){
           incrementScore(SCORE_POINT)
           
       } else {
        timeLeft = timeLeft - 5
       }
       //adds correct answer
       selectedChoice.parentElement.classList.add(classToApply);

       setTimeout(() =>{
          selectedChoice.parentElement.classList.remove(classToApply) 
          getNewQuestion()
       }, 1000)
    })
})

incrementScore = num => {
    score += num;
    scoreText.innerText = score
}

startGame();