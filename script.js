let strike = 3
let score = document.getElementById('score').value;
document.getElementById('start').onclick = function(){
    let question = Math.floor(Math.random()*30)
    document.getElementById('question').textContent = question
}

document.getElementById('submit').onclick = function(){
    let base = document.getElementById('question').textContent;
    power = base * base;
    let answer = document.getElementById('answer').value;
    if(answer == power){
        document.getElementById('whole').style.background = 'green';
        document.getElementById('result').textContent = 'CORRECT!';
        score++;
    }    else{
        document.getElementById('whole').style.background = 'red';
        document.getElementById('result').textContent = 'WRONG!!!!';
        strike--;
        document.getElementById('strikes').value = strike;

    }
}
