let weight = Number(prompt("Enter your weight ???"));
let height = Number(prompt("Enter your height in cm ???"));
let bodyMassIndex = 0 ;
height = height/100;
bodyMassIndex = weight/(height*height)  ;
alert("Your BMI = " + bodyMassIndex )
weight/(height*height)
if( bodyMassIndex<16 ){
    console.log("You are Severely")
}
else if( bodyMassIndex < 18.5)
{
    console.log("You are Underweight")
}
else if(bodyMassIndex<25)
{
    console.log("you are Normal")
}
else if(bodyMassIndex<30)
{
    console.log("you are Overweight")
}
else{
    console.log("you are Obese")
}