let quizzes = [
    {
        content : ' 1+1 = ????',
        answer : [2,3,4,5],
        rightAnswer : 0
    },
    {
        content : '1-1 = ????',
        answer :[2,0,4,9],
        rightAnswer : 1
    }
]

while(quizzes.length >0 ){
    let randomIndex = Math.floor(Math.random()*quizzes.length);
    let questionString = '';
    questionString += `${quizzes[randomIndex].content} \n `;
    for(let i=0;i<quizzes[randomIndex].answer.length;i++){
        questionString += `${i+1}.${quizzes[randomIndex].answer[i]} \n`
    }
    let userAnswer = Number(prompt(questionString));
    if(userAnswer-1 ==quizzes[randomIndex].rightAnswer){
        alert('Bravo !')
    }else {alert('Good luck next time')}
    quizzes.splice(randomIndex,1);
}
alert( 'We re out of Question')