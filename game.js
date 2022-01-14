const question = document.querySelector('#question');
const choices = Array.from( document.querySelector('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progreeeBarFull = document.querySelector('#progressBArFull');

var currentQuestion = {}
var acceptingAnswers = true