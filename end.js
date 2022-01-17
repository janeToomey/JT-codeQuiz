//declare variables for id's
const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#savedScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')
//adding highscore to local storage
const highScore = JSON.parse(localStorage.getItem('highScore'))|| []
//setting max high score
const MAX_HIGH_SCORE = 6
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
        score: mostRecentScore,
        name: username.value
    }

    highScore.push(score)
    
    highScore.sort((a,b)=>{
        return b.score - a.score
    })

    highScore.splice(6)

    localStorage.setItem('highScore', JSON.stringify(highScore))
    
    window.location.assign('index2.html')

    
}

