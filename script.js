let scores = [];
document.getElementById('start').onclick = function(){
    let question = Math.floor(Math.random()*30)
    document.getElementById('question').textContent = question
    document.getElementById('whole').style.background=' rgb(60, 70, 78)';
    let power = question * question;
    console.log(power);
    document.getElementById('answer').value= '';
}

document.getElementById('submit').onclick = function(){

    let strike = document.getElementById('strikes').innerHTML;
    strike = Number(strike);
    let score = document.getElementById('score').innerHTML;
    score = Number(score);
    let base = document.getElementById('question').textContent;
    power = base * base;
  
    
    let answer = document.getElementById('answer').value;
    console.log(answer);
    if(answer == power){
        document.getElementById('whole').style.background = 'green';
        document.getElementById('result').style.color  = 'aliceblue';
        document.getElementById('result').textContent = 'CORRECT!';
    score++;
        document.getElementById('score').innerHTML= score;
    }    else{
        document.getElementById('whole').style.background = 'red';
        document.getElementById('result').textContent = 'WRONG!!!!';
        strike--;
        document.getElementById('strikes').textContent= strike;

    }
    if(document.getElementById('strikes').textContent == 0){
        document.getElementById('question').textContent = 'GAMEOVER'
        let endscore = document.getElementById('score').innerHTML;
      scores.push(endscore);
let highscore = Math.max(scores);
    document.getElementById('highscore').innerHTML = highscore;    
    } else if(document.getElementById('strikes').textContent < 0 )
    {
        document.getElementById('strikes').textContent = 3;
        document.getElementById('score').textContent = 0;
    }
    document.getElementById('reset').onclick = function(){
        document.getElementById('strikes').innerHTML = 3;
        document.getElementById('score').innerHTML= 0;
        document.getElementById('whole').style.background=' rgb(60, 70, 78)'
        document.getElementById('question').textContent = 'RANDOM NUMBER'
    }
}
