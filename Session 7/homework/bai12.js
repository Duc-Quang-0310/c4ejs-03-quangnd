const items =['Backpack','MiBand Watch','Ring'];
//12.1 console.log(items)
const itemListUl = document.getElementById('item_list_ul');
console.log(itemListUl);
for(let i=0;i<items.length;i++){
    itemListUl.insertAdjacentHTML('beforeend',`<li>${items[i]}
    <span><button id="remove_Button">remove</button></span>
    </li>`);
}
const itemInput = document.getElementById('item_Input');
console.log(itemInput);

const addButton =document.getElementById('add_Button');
console.log(addButton);

//12.2-12.10 addButton.addEventListener('click', ()=>{
//     const itemAdd = itemInput.value;   
//     items[items.length] = itemInput.value;
//     itemListUl.insertAdjacentHTML("beforeend",`<li>${itemAdd}</li>`);
//     console.log(items);
//     console.log(itemListUl);
// })
const removeButton =document.getElementById('remove_Button');
addButton.addEventListener('click', ()=>{
    const itemAdd = itemInput.value;   
    items[items.length] = itemInput.value;
    itemListUl.insertAdjacentHTML("beforeend",`<li>${itemAdd};
    <span><button id="remove_Button">remove</button></span></li>`);
    console.log(itemListUl);
    const resetForm = document.getElementById('myForm');
    
    
})

removeButton.addEventListener('click', ()=>{
    items.indexOf();
    items.splice();
    console.log(itemListUl);
})






