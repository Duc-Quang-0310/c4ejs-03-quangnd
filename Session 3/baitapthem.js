//let weight = Number(prompt("Nhập vào cân nặng của bẹn "));
//let height = Number(prompt("Nhập vào chiều cao của bẹn (cm)"));
//let BMI = 0;
//BMI = weight/(height*height);
//height = height/100;
//if ( BMI < 18.5){
    //alert("Bạn gầy quá")
//} 
//else if(BMI <25){
    //alert(" Bạn có cân nặng bình thường đó")
//}
//else if(BMI<30){
    //alert("Bạn hơi béo nha")
//}
//else if(BMI <35){
    //alert("Bạn bị béo phì cấp độ 1 đó ")
//}
//else if(BMI<40){
    //alert("Bạn bị béo phì cấp độ 2 òii")
//}
//else{
    //alert("bạn bị BÉO phì cấp độ 3 , nên giảm cân êi")
//}

alert("Bạn biết phương trình bậc 2 thì chuẩn bị nhập vào 3 thông số dưới đây nhé ")
let a = Number(prompt("Nhập vào a"));
let b = Number(prompt("Nhập vào b"));
let c = Number(prompt("Nhập vào c"));
let delta = 0;
delta = (b*b)-4*a*c;
let x1 = 0;
let x2 = 0;
let sqrt = Math.sqrt(delta);
if (delta>0){
    alert("Phương trình có hai nghiệm ");
    x1 = (-b-sqrt)/2*a;
    x2 = (-b+sqrt)/2*a;
    alert("Nghiệm x1 là : " + x1);
    alert("Nghiệm x2 là : " + x2);
}
else if( delta= 0){
    alert("Phương trình có nghiệm kép");
    x1 = x2 = -b/2*a;
} else {
    alert("Phương trình vô nghiệm òiii");
}
