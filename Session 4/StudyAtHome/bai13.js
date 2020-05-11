console.log('Hi there, this is your learning task to front-end developer career : ')
let task = [
    {Task: 'HTML', Complete: false},
    {Task: 'CSS', Complete: false},
    {Task: 'Basic of JavaScript', Complete: false},
    {Task: 'Node Package Manager (npm)', Complete: false},
    {Task: 'Git', Complete: false}
];
for(let i = 0;i< task.length;i++){
    console.log((i+1) + '.' +task[i].Task);
    console.log(task[i].Complete);
}
let command = prompt('Enter your command(New,Delete,Update,Complete');
if(command == 'New'){
    let newTask = prompt('Enter new task');
    task.push({Task : command,Complete : false});    
}else if(command == 'Update'){
    let positionUpdate = prompt('Enter position');
    let titleUpdate = prompt('Enter new title');
    task[positionUpdate-1].Task = titleUpdate
}else if(command == 'Complete'){
    let positionUpdate1 = prompt('Enter position');
    task[positionUpdate1-1].Complete = 'True';
}else if (command =='Delete'){
    let positionUpdate2 = prompt('Enter position');
    task.splice(positionUpdate2-1,1)
}

for(let i = 0;i< task.length;i++){
     console.log((i+1) + '.' +task[i].Task);
     console.log(task[i].Complete);
 }
