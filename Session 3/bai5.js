let array = prompt('Enter a sequence of number, separated by commos(,)');
let split = array.split(",").map(Number);
let sum = 0 ;
for(let i=0;i<split.length;i++){
    sum += split[i];
    console.log(split[i]);
    
}
console.log(sum);