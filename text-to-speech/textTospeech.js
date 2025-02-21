let speech = new SpeechSynthesisUtterance();
let voices = []
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

voiceSelect.addEventListener("change",() =>{
    speech.voice = voices[voiceSelect.value];
})

const btn = document.querySelector("button");
const textarea = document.querySelector("textarea");

btn.addEventListener("click", function(){
    speech.text = textarea.value;
    window.speechSynthesis.speak(speech);
})