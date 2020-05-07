let items = ['Jeans','T-Shirt','Socks'];
while(true){
    let question = prompt(" Hi there, welcome to shop admin panel , what do you want(C,R,U,D)");
    if (question=='r'||question == 'R') {
        console.log("The current items are:")
        for(let i=0;i<items.length;i++){
            console.log( (i+1) + '.' + items[i] )
        }              
    }
    else if (question == 'c'||question =='C') {
        let newItem = prompt('Enter the name of the new item');
        items.push(newItem);
        alert('Done');        
    }else if (question=='u'||question=='U'){
        let positionUpdate = prompt("Enter the position you want to update");
        let newName = prompt("Enter the new name");
        items[positionUpdate] = newName;
        alert("Done");        
    }else if (question =='d'||question=='D'){
        let positionDelete = prompt("Enter the position you want to delete");
        alert('Done');
        items.splice(positionDelete,1);        
    }else {
        alert('This command is not supported');
        break;        
    }
}