/*
let active = false;
document.getElementById("mybutton").addEventListener("click", switch_img)

function switch_img() {

    if (active == false) {
        document.getElementById("myimg").src = "./assets/img/yellow_lamp.png"
        document.getElementById("mybutton").value = "Spegni"
        active = true
    } else {
        document.getElementById("myimg").src = "./assets/img/white_lamp.png"
        document.getElementById("mybutton").value = "Accendi"
        active = false
    }
} 

*/

///second method
/*
document.getElementById("mybutton").addEventListener("click", switch_img)

function switch_img() {

    if (document.getElementById("mybutton").value.includes("Accendi")) {
        document.getElementById("myimg").src = "./assets/img/yellow_lamp.png"
        document.getElementById("mybutton").value = "Spegni"
    } else {
        document.getElementById("myimg").src = "./assets/img/white_lamp.png"
        document.getElementById("mybutton").value = "Accendi"
    }
} 

*/
///third method (trying to fix not loading alt image on server-side)


document.getElementById("mybutton").addEventListener("click", switch_img)

function switch_img() {

    if (document.getElementById("myimg").src.includes("white_lamp.png")) {
        document.getElementById("myimg").src = "./assets/img/yellow_lamp.png"
        document.getElementById("mybutton").value = "Spegni"
    } else {
        document.getElementById("myimg").src = "./assets/img/white_lamp.png"
        document.getElementById("mybutton").value = "Accendi"
    }
} 