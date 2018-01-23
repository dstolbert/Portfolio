var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

window.onscroll = function() {fadeIn()};

function fadeIn() {
    if (document.body.scrollTop > (0.8*vh) || document.documentElement.scrollTop > (0.8*vh)) {
        document.getElementById("skills-div").className = "content fadeIn";
	} 
	if (document.body.scrollTop > (1.6*vh) || document.documentElement.scrollTop > (1.6*vh)) {
        document.getElementById("projects-div").className = "content fadeIn";
	}
}