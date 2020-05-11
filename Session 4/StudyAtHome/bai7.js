// let product1 = {
//     name : 'Xiaomi portable charger 20000mah',
//     brand : 'Xiaomi',
//     price : 428 ,
//     color : 'white',
//     category : 'Charger '    
// }
// let product2 = {
//     name : 'VSmart Active 1',
//     brand : 'VSmart',
//     price : 5487 ,
//     color : 'Black',
//     category : 'Phone'
// }
// let product3 = {
//     name :'Phone X ',
//     brand :'Apple',
//     price : 21490 ,
//     color : 'gray',
//     category : 'phone'
// }
// let product4 = {
//     name : 'samsung galaxy a9',
//     brand : 'samsung',
//     price : 8490,
//     color : 'blue',
//     category :'Phone'
// }
// let products = [product1,product2,product3,product4];
// for(let i = 0; i<products.length;i++){
//     console.log(products[i].name);
//     console.log(products[i].price);
//     console.log('---------------------------');
// }

// let product1 = {
//     name : 'Xiaomi portable charger 20000mah',
//     brand : 'Xiaomi',
//     price : 428 ,
//     color : 'white',
//     category : 'Charger ' ,   
// }
// let product2 = {
//     name : 'VSmart Active 1',
//     brand : 'VSmart',
//     price : 5487 ,
//     color : 'Black',
//     category : 'Phone'
// }
// let product3 = {
//     name :'Phone X ',
//     brand :'Apple',
//     price : 21490 ,
//     color : 'gray',
//     category : 'Phone'
// }
// let product4 = {
//     name : 'samsung galaxy a9',
//     brand : 'samsung',
//     price : 8490,
//     color : 'blue',
//     category :'Phone'
// }
// let products = [product1,product2,product3,product4];
// let enterCategory = prompt('Enter your Category?');
// for(let i=0; i < products.length ; i++ )
// {
//     if( products[i].category == enterCategory){
//         console.log(products[i].name);
//         console.log(products[i].price);
//         console.log('---------------------------');
//     }else {
//         console.log(products[i].name);
//         console.log(products[i].price);
//         console.log('---------------------------');
//     }
// }

// let product1 = {
//     name : 'Xiaomi portable charger 20000mah',
//     brand : 'Xiaomi',
//     price : 428 ,
//     color : 'white',
//     category : 'Charger ' ,   
// }
// let product2 = {
//     name : 'VSmart Active 1',
//     brand : 'VSmart',
//     price : 5487 ,
//     color : 'Black',
//     category : 'Phone'
// }
// let product3 = {
//     name :'Phone X ',
//     brand :'Apple',
//     price : 21490 ,
//     color : 'gray',
//     category : 'Phone'
// }
// let product4 = {
//     name : 'samsung galaxy a9',
//     brand : 'samsung',
//     price : 8490,
//     color : 'blue',
//     category :'Phone'
// }
// let products = [product1,product2,product3,product4];
// for (let i=0;i<products.length;i++){
//     console.log('#'+ [i+1] +products[i].name);
//     console.log(products[i].price);
// }
// let positionEnter = prompt('Enter position');
// console.log(products[positionEnter-1]);

let product1 = {
    name : 'Xiaomi portable charger 20000mah',
    brand : 'Xiaomi',
    price : 428 ,
    color : 'white',
    category : 'Charger ' ,   
}
let product2 = {
    name : 'VSmart Active 1',
    brand : 'VSmart',
    price : 5487 ,
    color : 'Black',
    category : 'Phone'
}
let product3 = {
    name :'Phone X ',
    brand :'Apple',
    price : 21490 ,
    color : 'gray',
    category : 'Phone'
}
let product4 = {
    name : 'samsung galaxy a9',
    brand : 'samsung',
    price : 8490,
    color : 'blue',
    category :'Phone'
}
let products = [product1,product2,product3,product4];
product1['Providers'] = 'Phukienzero-Dientuccc';
product2['Providers'] = 'tgdd-ddghn-vhstore';
product3['Providers'] = 'tgdd';
product4['Providers'] = 'tgdd';
for (let i=0;i<products.length;i++){
    console.log('#'+ [i+1] +products[i].name);
    console.log(products[i].price);
    console.log(products[i].Providers);
}

let find = product1.price;
console.log(find)
console.log(products.indexOf(product1.price))
// let searching = prompt('Enter provider')
// for( let j=0; j<products.length;j++){
//     if( products.indexOf(products[j].providers) == searching ){
//         console.log(products[j]);  
//     }
// }


