let number = prompt("Enter a squence of numbers, separated by (,)");
let split = number.split(",").map(Number);
let min = Math.min.apply(Math,split);
alert("The smallest number is : " + min);