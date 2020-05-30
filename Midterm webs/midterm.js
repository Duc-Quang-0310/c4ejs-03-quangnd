const boldBtn = document.getElementById('boldButton');
const italicBtn = document.getElementById('italicButton');
const underlineBtn= document.getElementById('underlineButton');
const output =document.getElementById('finalResult');
const resetBtn =document.getElementById('resetButton')
const userInput = document.getElementById("word");

function bold (){
    output.textContent = userInput.value;
    output.style.fontWeight='bold';
}
function italic (){
    output.textContent = userInput.value;
    output.style.fontStyle = 'italic'
}
function underline (){
    finalResult.textContent = userInput.value;
    finalResult.style.textDecoration = 'underline';
}
boldBtn.addEventListener('click',bold);
italicBtn.addEventListener('click',italic);
underlineBtn.addEventListener('click',underline);


const arrowImg =document.getElementById('arrow');
arrowImg.style.width = '200px';
arrowImg.style.paddingLeft='50px';
arrowImg.style.paddingRight='50px'

const userInput =document.getElementById('word');
userInput.style.width = '400px';
userInput.style.height = '200px';
userInput.style.display = 'inline-block';
userInput.style.marginLeft = '150px';
userInput.style.textAlignLast='justify';


output.style.fontWeight ='normal';
output.style.display='inline-block';
output.style.border ='solid 2px';
output.style.width = '400px';
output.style.marginRight = '150px';
output.style.height ='300px';






