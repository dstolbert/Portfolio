var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var projects = Array.from(document.getElementsByClassName("project"));
var yLoc = [];
scrollbar();

// Update vh and scrollbar if window is resized
window.addEventListener("resize", function(){
    console.log("resized");
    vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    scrollbar();
});

// Set the scrollability for the sidebar
document.getElementById("spaceship").addEventListener("click", function(){
    window.scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
        });
});

function scrollbar(){
    for(var i = 0; i <projects.length; i++){
        yLoc.push((i*vh)+vh+50);
        projects[i].addEventListener("click", function(){
            window.scroll({
                left: 0, 
                top: yLoc[projects.indexOf(this)],
                behavior: "smooth"
            });
        });
    }
}