import './styles/index.scss';
import { getVoices } from './scripts/allVoices';
import { handleMicro } from './scripts/microphone';
import { streamOn } from './scripts/stream';

const allVoices = document.getElementById("AllVoices");
const microphone = document.getElementById("Microphone");
const stream = document.getElementById("Stream");

const allVoicesButton = document.getElementById("AllVoicesButton");
const microphoneButton = document.getElementById("MicrophoneButton");
const streamButton = document.getElementById("StreamButton");

const recordButton = document.getElementById('recordCircleBut');

function activate(element, className) {
    let current = document.getElementsByClassName(className);
    current[0].classList.toggle(className);
    element.classList.toggle(className);
}

class NavBar {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    showAllVoicesPage() {
        activate(allVoicesButton, 'activeButton');
        getVoices();
        activate(allVoices, 'displayedMode');
    }

    showMicrophonePage() {
        activate(microphoneButton, 'activeButton');
        activate(microphone, 'displayedMode');
        recordButton.addEventListener("click", function() {
            handleMicro();
        });
    }

    showStreamPage() {
        activate(streamButton, 'activeButton');
        activate(stream, 'displayedMode');
        streamOn();
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    }
}

getVoices();
new NavBar(navBar);