
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Score');
const p2Display = document.querySelector('#p2Score');
const winningScoreSelect  = document.querySelector('#playto')


let p1Score = 0;
let p2Score = 0;
let winningScore = 5
let isGameOver = false;
const p1 ={
    score:0,
    button:document.querySelector('#p1Button'),
    display:document.querySelector('#p1Score')
}
const p2 ={
    score:0,
    button:document.querySelector('#p2Button'),
    display:document.querySelector('#p2Score')
}
function updateScores(player,opponent){
    if(!isGameOver){
       player.score +=1;
        if(player.score === winningScore){
            isGameOver = true;
            player.classList.add('winner');
            opponent.classList.add('loser');
        }
        player.display.textContent=player.score;
    }
}


p1.button.addEventListener('click',function (){

    updateScores(p1,p2);

})

p2.button.addEventListener('click',function (){
    updateScores(p2,p1);
})
winningScoreSelect.addEventListener('change',function (){
    winningScore = parseInt(this.value);
    reset();
})
resetButton.addEventListener('click',reset)

function reset(){
    isGameOver = false;
    for(let p of [p1,p2]){
            p.score=0;
            p.display.textContent = 0;
            p.display.classList.remove();
    }
}