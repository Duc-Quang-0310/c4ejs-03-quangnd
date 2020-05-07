//let movieName = ["Star wars", "The Punisher","Rocky","Pacman"];
//for( let n = 0;n<movieName.length;n++){
    //console.log(movieName[n]);
//}

//let movieName = ["Star wars", "The Punisher","Rocky","Pacman","aaa"];
//for( let n = 0;n<(movieName.length)/2;n++){
//console.log(movieName[n]);
//}
//let newArray = ["Batman","Up","Attack on titans","My boss my hero"];
//for ( let i = 0; i<newArray.length;i++){
    //console.log((i+1) + '.' + newArray[i]);
//}

//let movieName = ["Star wars", "The Punisher","Rocky","Pacman"];
//for( let n = 0;n<movieName.length;n++){
    //movieName[n]=movieName[n].toLowerCase();
    //console.log(movieName[n]);
//}

//let userName = String(prompt("Register an username"));
//while(true){
    //if(userName.length>15){
        //alert("Your user name is too long");
        //userName = String(prompt("Register an username"));
    //}else {
        //alert("Good username Yum Yum ");
        //break;
        //;
    //}
//}

alert("press Ctrl + Shift + I to see the quizzy(and then reload the page) ");
console.log("How many legs does a spider have??");
console.log("1.None \n2.4 legs \n3.8 legs \n4.12 legs")
let answer = prompt("Type your answer here ?");

while (true){   
    if (answer == 1 || answer == 2 || answer == 4){
        alert("Good luck next time , and now try again");
        answer = prompt("Type your answer here ?");
    }
    else if (answer==3){
        alert("Bravo , you are correct");
        break;
    }
    else {
        alert("HaHaHa dont be that funny ,type again -_-");
        answer = prompt("Type your answer here ?"); 
    }
}

