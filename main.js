
let active = false;
document.getElementById("mybutton").addEventListener("click", switch_img)

function switch_img() {

    if (active == false) {
        document.getElementById("myimg").src = "/assets/img/yellow_lamp.png"
        document.getElementById("mybutton").value = "Spegni"
        active = true
    } else {
        document.getElementById("myimg").src = "/assets/img/white_lamp.png"
        document.getElementById("mybutton").value = "Accendi"
        active = false
    }
} 