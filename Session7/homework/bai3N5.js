// 3.1 let không thể vì khi khai báo trong function là ta đã khai báo biến let trong {}
//     mà biến let khi khai báo chỉ tồn tại trong {nếu ta khai báo tại đây}.Nên kết luận
//     biến let sẽ không tồn tại khi function chạy xong

// 3.2 var thì có thể tồn tại vì sau khi mình khai báo var, var sẽ tồn tại cả trong và ngoài 
//     scope vậy nên kể cả khi function chạy xong thì var vẫn còn

//bai5 const singerName = document.getElementsByClassName("singer");
// console.log(singerName);

// const secondSingerName = document.getElementsByClassName("singer");
// console.log(singerName[1]);

// for( let i=0;i<singerName.length;i++){
//     console.log(singerName[i]);
// }

//bai2 setInterval(() => {
//     alert('hello');
// }, 3000);


