//declare variables

const highScoreList = document.querySelector('#highScoreList')
const highScores = JSON.parse(localStorage.getItem('highScores'))||[]
//logs the high scores of the players
highScoreList.innerHTML = highScores
.map(score =>{
    return `<li class = "high-score" >${score.name} - ${score.score} </li>`;
})
.join('');


