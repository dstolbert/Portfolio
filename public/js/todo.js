var input = document.getElementById("newTodo");
var plus = document.getElementById("plus");
var ul = document.getElementById("ul");

completedListener(document.getElementById("og"));
trashListener(document.getElementById("trash"));

input.addEventListener("keypress", (function(e){
	if(e.which === 13){
			var newLi = document.createElement("li");
			newLi.innerHTML = "<span><i class='fa fa-trash'></i></span> " + input.value;
			ul.appendChild(newLi);
			completedListener(newLi);
			trashListener(newLi.firstChild);
		};
	}
));

plus.addEventListener("click", function(){
	if(input.style.display === "none"){
		input.style.display = "block";
	} else {
		input.style.display = "none";
	}
});

function trashListener(trash){
	trash.addEventListener("click", function(e){
		ul.removeChild(trash.parentNode);
		// e.stopPropagation();
	});
}

function completedListener(li){
	li.addEventListener("click", function(e){
		li.classList.toggle("completed");
		// e.stopPropagation();
	});
}


