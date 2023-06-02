const collapsible = document.getElementsByClassName("collapsible");
const subspecies  = document.getElementsByClassName("subspecies");

var i, j;

for (i = 0; i < collapsible.length; i++) {
    collapsible[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

for (j = 0; j < subspecies.length; j++) {
    subspecies[j].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}