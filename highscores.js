//declare variables

const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScore'))||[]
//logs the high scores of the players
highScoresList.innerHtml = highScores
.map(score =>{
    return `<li class = "high-score">${score.name} - ${score.score}</li>`;
})
.join('');


