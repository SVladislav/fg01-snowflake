var context = document.querySelector("canvas").getContext("2d");
context.translate(document.querySelector("canvas").clientWidth / 4, document.querySelector("canvas").clientHeight / 4);
var length, i, k, n;
function inRad(num) {
	return num * Math.PI / 180;
}
function Coha(n, k){
	if(n == 0){
		context.fillRect(0, 0, 1, length/Math.pow(3,k));
		context.translate(0, length/Math.pow(3,k));
		k=0;
		return;
	}
	Coha(n-1, k+1);
	context.rotate(inRad(-60)); 
	Coha(n-1, k+1);
	context.rotate(inRad(120)); 
	Coha(n-1, k+1);
	context.rotate(inRad(-60)); 
	Coha(n-1, k+1);
}

context.rotate(inRad(-90));
context.fillRect(0, 0, 0, 0);
addEventListener("keydown", function(event) {
    if (event.code == "Enter"){
		i=3;
		k=0;
		n = parseInt(document.getElementById("n").value);
		length = parseInt(document.getElementById("length").value);
		if(n < 0) n = 0;
		if(length < 10) length = 10;
		if(length > 500) length = 500;
		document.getElementById("n").value = n;
		document.getElementById("length").value = length;
		context.rotate(inRad(0));
		context.clearRect(200, -2,-1000, 900);
		context.fillRect(0, 0, 0, 0);
		context.fillStyle = "red";
		while((i--)>0){
			Coha(n, k);
			context.rotate(inRad(120)); 
		}
	}
});