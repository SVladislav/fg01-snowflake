var context = document.querySelector("canvas").getContext("2d");
context.translate(document.querySelector("canvas").clientWidth / 4, document.querySelector("canvas").clientHeight / 4);
var length;
function TransferToRadian(num) {
	return num * Math.PI / 180;
}
function DrawingOneSideCoha(n, k){
	if(n == 0){
		var z = length/Math.pow(3,k);
		context.fillRect(0, 0, 1, length/Math.pow(3,k));
		context.translate(0, length/Math.pow(3,k));
		k = 0;
		return;
	}
	DrawingOneSideCoha(n-1, k+1);
	context.rotate(TransferToRadian(-60)); 
	DrawingOneSideCoha(n-1, k+1);
	context.rotate(TransferToRadian(120)); 
	DrawingOneSideCoha(n-1, k+1);
	context.rotate(TransferToRadian(-60)); 
	DrawingOneSideCoha(n-1, k+1);
}
function DrawingAllSidesCoha(n, k){
	DrawingOneSideCoha(n, k);
	context.rotate(TransferToRadian(120)); 
}

context.rotate(TransferToRadian(-90));
context.fillRect(0, 0, 0, 0);
addEventListener("keydown", function(event) {
    if (event.code == "Enter"){
		let k = 0;
		let n = parseInt(document.getElementById("n").value);
		length = parseInt(document.getElementById("length").value);
		if(n < 0) n = 0;
		if(length < 10) length = 10;
		if(length > 500) length = 500;
		document.getElementById("n").value = n;
		document.getElementById("length").value = length;
		context.rotate(TransferToRadian(0));
		context.clearRect(200, -2,-1000, 900);
		context.fillRect(0, 0, 0, 0);
		context.fillStyle = "red";
		for(let i=0; i<3; i++)
			DrawingAllSidesCoha(n, k);
	}
});