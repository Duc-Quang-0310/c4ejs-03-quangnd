let sheepSizes = [5,7,300,90,24,50,75];
console.log('Hello, My name is Quang and here is my sheep sizes');
console.log(...sheepSizes);
let max = Math.max.apply(Math,sheepSizes);
console.log('Now my biggest sheep has size '+ max +' ,let`s shave it');
let find = sheepSizes.indexOf(max);
sheepSizes[find] = 8
console.log('After shearing , here is my flock')
console.log(...sheepSizes)
console.log('MONTH 1')
console.log('One month has passed, my sheeps have grown, here are their sizes' );
for(let i = 0;i<sheepSizes.length;i++){
    sheepSizes[i]= sheepSizes[i] +50 ;
}
console.log(...sheepSizes)
for( let i = 1 ;i<4;i++){
    console.log('Hello, My name is Quang and here is my sheep sizes');
    console.log(...sheepSizes);
    let max = Math.max.apply(Math,sheepSizes);
    console.log('Now my biggest sheep has size '+ max +' ,let`s shave it');
    let find = sheepSizes.indexOf(max);
    sheepSizes[find] = 8
    console.log('After shearing , here is my flock')
    console.log(...sheepSizes)
    console.log('MONTH '+ (i+1) )
   console.log('One month has passed, my sheeps have grown, here are their sizes' );
for(let j = 0;j<sheepSizes.length;j++){
    sheepSizes[j]= sheepSizes[j] + 50 ;
}
console.log(...sheepSizes)
}
let sum = 0
for(let x = 0;x <sheepSizes.length;x++){
    sum += sheepSizes[x];
}
console.log('My flock has size in total '+ sum);
let money =sum*2
console.log('I would get 1010*2$='+money);

