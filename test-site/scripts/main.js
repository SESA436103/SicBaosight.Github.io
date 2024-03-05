let myHeading = document.querySelector("h1");
myHeading.textContent="Hello word!";

if(myHeading.textContent==="Hello"){
	alert("Hello");
}else{
	alert("Word");
}


document.querySelector("html").addEventListener("click",function(){
	alert("别点我!积为:"+multiply(2,3));
})

function multiply(num1,num2){
	let result=num1 * num2;
	return result;
}

let myImg=document.querySelector("img");
myImg.onclick=function(){
	let mySrc=myImg.getAttribute("src");
	if(mySrc==="images/google.png"){
		myImg.setAttribute("src","images/nodepad++.png");
	}else{
		myImg.setAttribute("src","images/google.png");
	}
};

let myButton=document.querySelector("button");

function setUserName(){
	let myName=prompt("请输入你的名字...");
	if(!myName){
		setUserName();
	}else{
		localStorage.setItem("name",myName);
		myHeading.textContent="Nodepad++ 酷毙了! " + myName;
	}
}

if(!localStorage.getItem("name")){
	setUserName();
}else{
	let storedName=localStorage.getItem("name");
	myHeading.textContent="Nodepad++ 酷毙了! " + storedName;
}

myButton.onclick=function(){
	setUserName();
};