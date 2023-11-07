let question = Math.floor(Math.random()*30)

document.getElementById('start').onclick = function(){
    let question = Math.floor(Math.random()*30)
    document.getElementById('question').textContent = question;
}

document.getElementById('submit').onclick = function(){
    let answer = document.getElementById('answer').textContent;
    answer = Number(answer);
    ;
    let correct = Number(document.getElementById('question').textContent);
correct = correct*correct
    if(answer == correct){}
}