var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("camera").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("camera").innerHTML = Content;
    console.log(Content);


        speak();
      
    
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Opening camera";

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    utterThis.pitch=10;
    utterThis.volume=0.4;
    synth.speak(utterThis);
    Webcam.attach(camera);

}

 
camera = document.getElementById("camera");
Webcam.set({
    width:328,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});


