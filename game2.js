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