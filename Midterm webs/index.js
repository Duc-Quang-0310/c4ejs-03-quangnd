const boldButton = document.getElementById("bold");
const italicButton = document.getElementById("italic");
const underlineButton = document.getElementById("underline");
const userInput = document.getElementById("word");
const finalResult = document.getElementById("result");

userInput.style.fontSize ="20px"
userInput.style.display="inline-block";
userInput.style.width='500px';
userInput.style.height='300px';
userInput.style.borderRadius= '30px';
userInput.style.textAlign ='justify';
userInput.style.marginLeft = '150px';

finalResult.style.display = 'inline-block';
finalResult.style.width='500px';
finalResult.style.height='160px';
finalResult.style.border ="solid 2px"
finalResult.style.borderRadius = '30px';
finalResult.style.paddingTop = '140px';
finalResult.style.fontSize ='30px';



boldButton.addEventListener('click',()=>{
    finalResult.textContent = userInput.value;
    finalResult.style.fontWeight ="bold";    
})
italicButton.addEventListener("click",()=>{
    finalResult.textContent =userInput.value;
    finalResult.style.fontStyle = "italic";
})
underlineButton.addEventListener("click",()=>{
    finalResult.textContent = userInput.value;
    finalResult.style.textDecoration = 'underline';
})