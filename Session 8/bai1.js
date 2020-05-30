const countNumber = document.getElementById('count');
const plusBtn = document.getElementById('plusButton');
const minusBtn = document.getElementById('minusButton');
let firstNumber = document.getElementById('zero');
let number = 0;
plusBtn.addEventListener('click', () => {
    number += 1 ; 
    firstNumber.textContent = number;
    console.log(countNumber);
      
})
minusBtn.addEventListener('click', () => {
    number -= 1;
    firstNumber.textContent = number;
    console.log(countNumber);
})




