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

//define function speak() below. Inside the speak function, set pitch to 10 and volume to 0.4



camera = document.getElementById("camera");
 //set up camera with width 328, height 400, image_format jpeg and jpeg_quality 90.

