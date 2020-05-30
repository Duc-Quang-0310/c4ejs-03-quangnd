let timeSheetData ={
    project: ['learn front-end','learn front-end','learn front-end','learn git'],
    task :['Learn HTML','Learn CSS','Learn JS Variables','Learn git basics'],
    timeSpent: [6,8,6,2]
}

const projectHTML = document.getElementById('project');
const taskHTML = document.getElementById('task');
const timeHTML = document.getElementById('time');
let tableBody = document.getElementById('ts_body');

for(let i=0;i<timeSheetData.project.length;i++){
    tableBody.insertAdjacentHTML('beforeend',`<tr>
    <td id="project">${timeSheetData.project[i]}</td>
    <td id="task">${timeSheetData.task[i]}</td>
    <td id="time">${timeSheetData.timeSpent[i]}</td>
    <td><button id ="removeBtn">X</button></td>
</tr>`)
}

const inputProject =document.getElementById('enterProject');
const inputTask = document.getElementById('enterTask');
const inputTime = document.getElementById('enterTime');
const addButton = document.getElementById('addBtn')

function addNewItem (){
    tableBody.insertAdjacentHTML('beforeend',
    `<tr>
    <td id="project">${inputProject.value}</td>
    <td id="task">${inputTask.value}</td>
    <td id="time">${inputTime.value}</td>
    <td ><button id ="removeBtn">X</button></td>
    </tr>`
)
}
addButton.addEventListener('click',addNewItem);

const removeButton = document.getElementById('removeBtn')

const clearButton =document.getElementById('clearBtn');
function clearAll (){
    document.getElementById('myForm').removeChild();
    resetForm.reset();
}



