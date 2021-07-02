import './styles/index.scss';
import { showAllVoicesPage } from './scripts/allVoices';
import { showMicrophonePage } from './scripts/Microphone';
import { showStreamPage } from './scripts/stream';

const allVoicesButton = document.getElementById("AllVoicesButton");
const microphoneButton = document.getElementById("MicrophoneButton");
const streamButton = document.getElementById("StreamButton");

const modeText = document.getElementsByClassName("mode");

function ActivateButton(element) {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    element.className += " active";
}

function DoNotDisplayModeText() {
    for (let i = 0; i < modeText.length; i++) {
        modeText[i].style.display = "none";
    }
}

//Initial page in all voices mode
//All other modes are disabled
DoNotDisplayModeText();
showAllVoicesPage();

allVoicesButton.addEventListener("click", function() {
    ActivateButton(this);
    DoNotDisplayModeText();
    showAllVoicesPage();
});

microphoneButton.addEventListener("click", function() {
    ActivateButton(this);
    DoNotDisplayModeText();
    showMicrophonePage();
});

streamButton.addEventListener("click", function() {
    ActivateButton(this);
    DoNotDisplayModeText();
    showStreamPage();
});