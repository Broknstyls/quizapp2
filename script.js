
document.getElementById('start').onclick = function(){
    let question = Math.floor(Math.random()*30)
    document.getElementById('question').textContent = question
    document.getElementById('whole').style.background=' rgb(60, 70, 78)';
    let power = question * question;
    console.log(power);
}

document.getElementById('submit').onclick = function(){
    let strike = document.getElementById('strikes').value;
    let point = 1;
    let score = document.getElementById('score').value;
    let base = document.getElementById('question').textContent;
    power = base * base;
    
    let answer = document.getElementById('answer').value;
    if(answer == power){
        document.getElementById('whole').style.background = 'green';
        document.getElementById('result').style.color  = 'aliceblue';
        document.getElementById('result').textContent = 'CORRECT!';
        score = Number(score);
         score = score+ point;
        document.getElementById('score').value= score;
    }    else{
        document.getElementById('whole').style.background = 'red';
        document.getElementById('result').textContent = 'WRONG!!!!';
        strike = Number(strike);
       strike = strike-point;
        document.getElementById('strikes').textContent= strike;

    }
}
