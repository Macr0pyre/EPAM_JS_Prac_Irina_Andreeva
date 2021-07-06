import './styles/index.scss';
// import { showAllVoicesPage } from './scripts/allVoices';
// import { showMicrophonePage } from './scripts/Microphone';
// import { showStreamPage } from './scripts/stream';

const allVoices = document.getElementById("AllVoices");
const microphone = document.getElementById("Microphone");
const stream = document.getElementById("Stream");

const allVoicesButton = document.getElementById("AllVoicesButton");
const microphoneButton = document.getElementById("MicrophoneButton");
const streamButton = document.getElementById("StreamButton");

function Activate(element, className) {
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
        Activate(allVoicesButton, 'activeButton');
        Activate(allVoices, 'displayedMode');
    }

    showMicrophonePage() {
        Activate(microphoneButton, 'activeButton');
        Activate(microphone, 'displayedMode');
    }

    showStreamPage() {
        Activate(streamButton, 'activeButton');
        Activate(stream, 'displayedMode');
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    }
}

new NavBar(navBar);