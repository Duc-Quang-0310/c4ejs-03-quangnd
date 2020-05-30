const tagName = document.getElementsByTagName('li')
console.log(tagName)
console.log('--------------')
console.log(tagName[1]);
console.log('--------------')
for(let i=0;i<tagName.length;i++){
    console.log(tagName[i]);
}
console.log('--------------')
const liClass = document.getElementById('li_02');
liClass.remove();
console.log(tagName)