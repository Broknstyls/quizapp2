
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
    
        document.getElementById('score').innerHTML= score++;
    }    else{
        document.getElementById('whole').style.background = 'red';
        document.getElementById('result').textContent = 'WRONG!!!!';
        document.getElementById('strikes').textContent= strike--;

    }
}
