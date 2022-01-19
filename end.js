//declare variables for id's
const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#savedScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')
//adding highscore to local storage
const highScores = JSON.parse(localStorage.getItem('highScore'))|| []
//setting max high score
const MAX_HIGH_SCORE = 5
//making sure current score shows up
finalScore.innerText = mostRecentScore
//when key pressed, save button enabled
username.addEventListener ('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

//
saveHighScore = e =>{
    //prevents automatic reset on refresh
    e.preventDefault()
    //variable to create user/score object
    const score = {
        score:Math.floor(Math.random()* 100),
        name: username.value
    }

    highScores.push(score)
    //sorts the score
    highScores.sort((a,b)=>{
        return b.score - a.score
    })
    //cuts off high scores after 5 top scores reached
    highScores.splice(5)
     localStorage.setItem('highScores', JSON.stringify(highScores));
   window.location.assign('index2.html');
    
    

    
}

