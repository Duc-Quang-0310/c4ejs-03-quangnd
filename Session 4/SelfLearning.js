let footballPlayer = ["Ronaldo","Messi","Neymar"];
console.log(footballPlayer);
let n = prompt("Do you want to insert a football-player(Yes-No) ???");
if ( n == "Yes"){
    let player = prompt("The name of your football-player");
    footballPlayer.push(player);
    console.log(footballPlayer);
}
else{
    alert("Good Byeeeeee ");
}
