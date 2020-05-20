const inventory = [

    {
    
        name: 'HP Envy 13aq',
    
        price: 21000,
    
        brand: `HP`,
    
        quantity: 5,
    
    },
    
    {
    
        name: 'Dell XPS 9370',
    
        price: 30000,
    
        brand: `Dell`,
    
        quantity: 1,
    
    },
    
    {
    
        name: 'Dell Inspiron 3567',
    
        price: 9300,
    
        brand: `Dell`,
    
        quantity: 12,
    
    },
    
    {
    
        name: 'Dell Latitude E5450',
    
        price: 8600,
    
        brand: `Dell`,
    
        quantity: 2,
    
    },
    
    {
    
        name: 'Asus Zenbook',
    
        brand: `Asus`,
    
        price: 20000,
    
        quantity: 4,
    
    },
    
    {
    
        name: 'HP Pavilion',
    
        brand: `HP`,
    
        price: 14000,
    
        quantity: 7,
    
    },]
    let inventoryByBrand = {};
    inventoryByBrand['HP'] = [];
    inventoryByBrand['Dell'] = [];
    inventoryByBrand['Asus'] = [];
    for(let i = 0;i<inventory.length;i++){
        if(inventory[i].brand == "HP"){
            inventoryByBrand['HP'].push(inventory[i])
        }
        if(inventory[i].brand == "Dell" ){
            inventoryByBrand['Dell'].push(inventory[i])
        }
        if(inventory[i].brand == "Asus" ){
            inventoryByBrand['Asus'].push(inventory[i])    
        }
        
    }
    console.log(inventoryByBrand)
    
    //bai4//

    // let typeBrand = String(prompt('Which brand?'));
    // if(typeBrand === 'Dell'||typeBrand==='dell'){
    //     alert(`There are ${inventoryByBrand.Dell.length} generations of 'DELL' in inventory`);
    // }
    // if( typeBrand==='HP'||typeBrand==='hp'){
    //     alert(`There are ${inventoryByBrand.HP.length} generations of 'HP' in inventory`);
    // }if( typeBrand==='Asus'||typeBrand==='asus'){
    //     alert(`There are ${inventoryByBrand.Asus.length} generation of 'Asus' in inventory`);
    // }

    //bai5+6//
    let typeBrand = String(prompt('Which brand?'));
    let answerString ="";
    let totalValue = 0
    if(typeBrand === 'Dell'||typeBrand==='dell'){
        answerString += `There are ${inventoryByBrand.Dell.length} generations of 'DELL' in inventory \n` ;
        for(let j=0;j<inventoryByBrand.Dell.length;j++){
            answerString += `${inventoryByBrand.Dell[j].name} \n` 
            totalValue += inventoryByBrand.Dell[j].price*inventoryByBrand.Dell[j].quantity;
        }
    }
    if( typeBrand==='HP'||typeBrand==='hp'){
        answerString += `There are ${inventoryByBrand.HP.length} generations of 'HP' in inventory \n` ;
        for(let j=0;j<inventoryByBrand.HP.length;j++){
            answerString += `${inventoryByBrand['HP'][j].name} \n`
            totalValue += inventoryByBrand.HP[j].price*inventoryByBrand.HP[j].quantity; 
        }
    }if( typeBrand==='Asus'||typeBrand==='asus'){
        answerString += `There are ${inventoryByBrand.Dell.length} generation of 'Asus' in inventory \n` ;
        for(let j=0;j<inventoryByBrand.Asus.length;j++){
            answerString += `${inventoryByBrand.Asus[j].name} \n`
            totalValue += inventoryByBrand.HP[j].price*inventoryByBrand.HP[j].quantity;
        }
    }
    answerString += `With total value :${totalValue}K`
    alert(answerString);


   
