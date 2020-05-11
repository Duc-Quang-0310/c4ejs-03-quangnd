// let person1 = {
//     name: `Nam`,
//     age: 19
// }
// let person2 = {
//     name : 'Quang',
//     age :19
// }
// let personArr = [];
// personArr.push(person1);
// personArr.push(person2);
// console.log(personArr)

//console.log(person)
//console.log(person.age)

//let prop = 'age';
//console.log(person.prop);
//console.log(person['name'])

let movie = {
    title: 'The dark night rises',
    year : ' 2012',
    rate : '8.4'
}
let updateThing = prompt('What you want to update');
let answer = movie[updateThing];
if(!answer){
    alert(updateThing + ' does not exsist in our data,we will add new');
    let newData = prompt('Enter the new data');
    movie[updateThing] = newData;
    console.log(movie);
}else {
    let newData = prompt('Enter the new data');
    movie[updateThing] = newData;
    console.log(movie);   
}

// movie['rate']= 8.7;
// console.log(movie['rate']);
// movie['rate']= movie['rate'] += 0.5;
// console.log( movie['rate']);

// let update = prompt('What you want to update');
// let updateNew = prompt('What is the update');
// movie[update] = updateNew;
// console.log(movie);

// console.log(movie)
// console.log(movie.title);
// console.log(movie.year);
// console.log(movie.rate);
// console.log(movie['title']);
// console.log(movie['year']);
// console.log(movie['rate']);
// console.log(movie['director'])


//let list = ['sport','LOL','BTS']
//list.push('Sugar');
//console.log(list);
//for(let i =0;i<list.length;i++){
    //list[i] = list[i].toUpperCase();
    //console.log(list[i]);
//}

//read3// let movie = {
//     title : "Duc Quang Dep zai",
//     year : 2000,
//     rate : 10
// }
// let userKnowledge = prompt('What do you want to know');
// let answer =movie[userKnowledge];
// if( !answer  ){
//     alert(userKnowledge + ' does not exist in our data');

// }else{
//     alert(movie[userKnowledge]);
// }

// let movie1 ={
//     title: 'Once in a life time',
//     year : 2012,
//     rate : 7,
// }
// let movie2 = {
//     title: 'Can you show me',
//     year : 2015,
//     rate : 7.6,
// }
// let movie3 = {
//     title: 'Sugar DADDY ??',
//     year : 1989,
//     rate : 9,
// }
// let movieArr =[];
// movieArr.push(movie1);
// movieArr.push(movie2);
// movieArr.push(movie3);
// console.log(movieArr[0]);
// console.log(movieArr[2]['title']);
// for(let i =0;i<movieArr.length;i++){
//     console.log(movieArr[i]['title']);
//     console.log(movieArr[i]);
// }
// movieArr[movieArr.length]['rate'] = movieArr[movieArr.length]['rate'] + 0.7;
// console.log(movieArr[movieArr.length]);


//obj-contain-arr// let movie = {
//     title: 'Duc Quang Dep Zai',
//     year : 2000,
//     rate : 8.6,
//     character : ['DucQuang','Nhan vat quan chung','Ciutee']
// }
// console.log(movie['title']);
// console.log(movie['year']);
// console.log(movie['rate']);
// console.log(...movie['character']);
// movie[`character`].push('Somerandomboyyy');
// console.log('The result');
// console.log(movie['title']);
// console.log(movie['year']);
// console.log(movie['rate']);
// console.log(...movie['character']);


// let movie1 = {
//     title : 'Attack on titans',
//     year : '2013',
//     rate : '8.8',
//     casts : ['eren','Armin','Mikasa'],
// }
// let movie2 = {
//     title: 'Mind hunter',
//     year :2017,
//     rate:8.6,
//     casts:`Holden Bill`,
// }
// let movie3 = {
//     title : 'Manhunt: Unabomber',
//     year : 2017,
//     rate : 8.1,
//     casts : 'Ted',
// }
// let movieArr = [movie1,movie2,movie3];
// console.log(movieArr)




