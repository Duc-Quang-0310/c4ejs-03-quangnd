const container =document.getElementById('list');
for(let i=0;i<3;i++){
    container.insertAdjacentHTML('beforebegin',`<li>${i}</li>`)
}
console.log(container)

//1-d , 2-c , 3-a , 4-b