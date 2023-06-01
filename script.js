//your JS code here. If required.
let timer=document.getElementById("timer");
SetInterval(()=>{
	let d=new Date();
console.log(d);
timer.innerText=d.getSeconds();
timer.innerText=d.getMinutes();
timer.innerText=d.getHours();
},2000)
// const time= document.getElementById("timer");
// SetInterval(() => {
// 	let d= new Date();
// 	console.log(d);
// 	time.innerText= d.getSeconds();
// 	time.innerText= d.getMinutes();
// 	time.innerText= d.getHours();
// },1000)
