import './styles/index.scss';

function DoNotDisplayModeText() {
    for (let i = 0; i < modeText.length; i++) {
        modeText[i].style.display = "none";
    }
}

let modeText = document.getElementsByClassName("mode");

DoNotDisplayModeText();

document.getElementById("AllVoices").style.display = "block";

let buttons = document.getElementsByClassName("navButton");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        DoNotDisplayModeText();

        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

        let mode = document.getElementById(this.id.replace("Button", ""));
        mode.style.display = "block";
    });
}