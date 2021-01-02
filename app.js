// function myDisplayer(some) {
//     console.log(some)
//   }
  
//   function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   mySecond();
//   myFirst();

// let ab = (a,b, Callback)=>{
//     let sum = a+b;
//     Callback(sum);
// }
// function display(some){
//     console.log(some)
// }
// let d = ab(2,4,display)

// console.log("start")
// setTimeout(myfunction,3000);

// function myfunction(){
//     console.log("hello")
// }

// console.log("end")



setInterval(() => {
    let d = new Date;
    document.getElementById("time").innerHTML = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();  
}, 1000);