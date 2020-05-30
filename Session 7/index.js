// 1. khai bao ham (declare)

// const  say=() => { // function header
//     console.log('session7');
//     console.log('hayyo');
// } // ==> function body
// setTimeout(say,3000)

//2. goi ham(call function, invoke)

//1. Vi tri viet lenh 

const thanks = ( name,action ) => {
    console.log(`hello ${name}`);
    console.log(`Thanks for ${action}`);
    // if(name == 'Huyen'){
    //     console.log(`Thanks ${name} for your support in STUDY`)}
    // else {console.log(`Thanks ${name} for your support in OTHERTHINGS`)}       
    // }
}
// function ThanksOanh() {
//     console.log('Thanks Oanh for your support in my journey')
// }
const h1Msg = document.getElementById('msg');
console.log(h1Msg);
h1Msg.textContent ='HOohohohh';

const bttSayIt = document.getElementById('sayIt');
console.log(bttSayIt)
bttSayIt.addEventListener('click', ( ) =>  {
    const name = inputName.value ;
    console.log(inputName.value);
    const msg = `Hello ${name} have a nice day`;
    h1Msg.textContent = msg;
    olFav.insertAdjacentHTML('beforeend',`<li>${name}</li>`)
})
const inputName =document.getElementById('name');
console.log(inputName);
console.log(inputName.value);

const olFav =document.getElementById('fav');
console.log(olFav)

olFav.insertAdjacentHTML('beforeend','<li>Chao nongg</li>')

