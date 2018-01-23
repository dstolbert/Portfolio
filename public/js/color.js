var boxes = document.querySelectorAll(".box");
var hardBoxes = document.querySelectorAll(".bot");
var text = document.getElementById("message").textContent;
var reset = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var difficulty = 6;
var winColor;

console.log(text);

gameLoop();
reset.addEventListener("click", gameLoop);
easy.addEventListener("click", function(){
	difficulty = 3;
	for(var i = 0; i < difficulty; i++){
		hardBoxes[i].style.backgroundColor = "#232323";
	}
	gameLoop();
});
easy.addEventListener("click",selected);
hard.addEventListener("click", function(){
	difficulty = 6;
	gameLoop();
});
hard.addEventListener("click", selected);

function selected(){
	easy.classList.toggle("selected");
	hard.classList.toggle("selected");
}

function getRandomColor(){
	var red = Math.floor(Math.random()*255);
	var green = Math.floor(Math.random()*255);
	var blue = Math.floor(Math.random()*255);
	var color = "rgb(" + red + ", " + green + ", " + blue + ")";
	return color;
};

function win(){
	for(var i = 0; i < difficulty; i++){
	boxes[i].style.backgroundColor = winColor;
	boxes[i].removeEventListener("click", win);
	boxes[i].removeEventListener("click", lose);
	};
	document.querySelector("#message").textContent = " Correct! ";
}
function lose(){
	this.style.backgroundColor = "#232323";
	this.removeEventListener("click", lose);
	document.querySelector("#message").textContent = " Try Again! ";
};

function gameLoop(){
	document.querySelector("#message").textContent = " Good Luck! ";
	var winBox = Math.floor(Math.random()*difficulty + 1);
	for(var i = 0; i < difficulty; i++){
		boxes[i].style.backgroundColor = getRandomColor();
		boxes[i].addEventListener("click", lose);
		if(i + 1 === winBox){
			winColor = boxes[i].style.backgroundColor;
			document.querySelector("#rgb").textContent = winColor;
			boxes[i].addEventListener("click", win);
			console.log(i+1);
			console.log(winColor);
		};
	};
}



