const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
let startNumber =document.getElementById('number');
const userInput = document.getElementById('input');

function countDown () {
    if ( startNumber.textContent == 1  ){
        startNumber.textContent ='Time is up';             
    }
    else if(startNumber.textContent =='Stopped'){
        clearInterval(countDown)
    }
    else if(startNumber.textContent == 'Time is up' ) {
        clearInterval(countDown)
    }
    else {startNumber.textContent--}
}
startButton.addEventListener('click',()=>{
    startNumber.textContent = userInput.value;
    setInterval(countDown, 1000);
})
stopButton.addEventListener('click',()=>{
    startNumber.textContent = 'Stopped';
})
console.log(startNumber.textContent);