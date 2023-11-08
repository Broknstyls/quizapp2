
document.getElementById('start').onclick = function(){
    let question = Math.floor(Math.random()*30)
    document.getElementById('question').textContent = question
    document.getElementById('whole').style.background=' rgb(60, 70, 78)';
}

document.getElementById('submit').onclick = function(){
    let strike = 3;
    let score = 0;
    let base = document.getElementById('question').textContent;
    power = base * base;
    let answer = document.getElementById('answer').value;
    if(answer == power){
        document.getElementById('whole').style.background = 'green';
        document.getElementById('result').textContent = 'CORRECT!';
        score++;
        document.getElementById('score').innerHTML= score;
    }    else{
        document.getElementById('whole').style.background = 'red';
        document.getElementById('result').textContent = 'WRONG!!!!';
        strike--;
        document.getElementById('strikes').innerHTML= strike;

    }
}
