let strike = document.getElementById('strikes').textContent;

    

document.getElementById('start').onclick = function(){
    let question = Math.floor(Math.random()*30)
    
    document.getElementById('question').textContent = question;
   let question2 = question*question;
   console.log(question2)
}

document.getElementById('submit').onclick = function(){
    let answer = document.getElementById('answer').textContent;
    let correct = document.getElementById('question').textContent;
    correct = correct*correct;

    if(answer == correct){
        document.getElementById('result').textContent = 'CORRECT'

    } else{
        document.getElementById('result').textContent = 'WRONG'
        strike--;
        
    }
}