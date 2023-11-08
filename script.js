let strike = document.getElementById('strikes').textContent;

document.getElementById('start').onclick = function(){
    let question = Math.floor(Math.random()*30)
    document.getElementById('question').textContent = question
}

document.getElementById('submit').onclick = function(){
    let base = document.getElementById('question').textContent;
    power = base * base;
    console.log(power);
    
}
