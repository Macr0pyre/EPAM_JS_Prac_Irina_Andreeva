const voicesList = document.getElementById('voicesList');

export async function getVoices() {
    voicesList.innerHTML = "";
    const response = await fetch('https://voicy-speaker.herokuapp.com/voices')
    const data = await response.json()
    for (let i = data.length - 5; i < data.length; i++) {
        const audio = document.createElement('audio');
        audio.controls = true
        const audioBlob = new Blob([new
            Uint8Array(data[i].audioBlob[0].data).buffer
        ]);
        const audioUrl = URL.createObjectURL(audioBlob);
        audio.src = audioUrl

        const li = document.createElement('li');
        li.classList.add('voiceMessage');
        li.appendChild(audio)
        voicesList.appendChild(li);
    }
}