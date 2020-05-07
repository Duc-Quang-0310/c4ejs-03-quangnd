//let names = prompt('enter a sequence of names, separated bycommas (,)');
//let nameSplit = names.split(',');
//let newName = nameSplit.map(name => '<' + name + '>');
//alert(names + '=>' + newName);

let numbers = prompt('Enter a sequence number');
let numberSplit = numbers.split(',');
let newNumber = numberSplit.filter(numberSplit => numberSplit%2==1);
alert(numbers + '=>' + newNumber)