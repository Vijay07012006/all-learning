function convert() {
    const input = document.querySelector(".box input");
    let text = input.value.trim();

    if (text = "") {
        alert("Please Enter Text");
        return;
    }

    speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);

    utter.rate = 1;   // speed 0.5 – 2
    utter.pitch = 1;  // tone 0 – 2
    utter.volume = 1; // 0 – 1

    speechSynthesis.speak(utter);
}


// function convrt() {
//     let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//         alert("Your browser does not support Speech Recognition!");
//         return;
//     }

//     let Recognition = new SpeechRecognition();

//     Recognition.lang = 'en-US';
//     Recognition.interimResults = true;   
//     Recognition.continuous = true;       

//     Recognition.onresult = function (event) {
//         let d = "";
//         for (let i = event.resultIndex; i < event.results.length; i++) {
//             d += event.results[i][0].transcript;
//         }
//         document.getElementById('words').innerHTML = d;
//     }

//     Recognition.start();
// }

function convrt() {
    let a = window.SpeechRecognition || window.webkitSpeechRecognition;
    let rec = new a();
    rec.start();
    rec.continuous = true;
    rec.lang = 'en-us';
    rec.onresult = function (b) {
        // console.log(b.results[0][0].transcript);
        let d = "";
        for (let i = b.resultIndex; i < b.results.length; i++) {
            d += b.results[i][0].transcript;
        }
        document.getElementById('words').innerHTML = d;
    }
}