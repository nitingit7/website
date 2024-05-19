let hai = 2;
let currentAudio = null;
function myFunction(){
    if(hai%2 == 0) document.getElementById("para").innerHTML = "Congrats you successfully click the button";
        
    else           document.getElementById("para").innerHTML = "Opps you changed again";    
    hai++;
}

function tunroffLight(){
    document.getElementById("imageofBulb").src = "bulboff.jpeg";
}

function turnonLight(){
    document.getElementById("imageofBulb").src = "bulbon.jpeg"
}

function addition(){
    let x = parseInt(document.getElementById("numbera").value);
    let y =parseInt(document.getElementById("numberb").value);
    if(!isNaN(x && y)){
        let z = x + y;
        document.getElementById("result").innerHTML = z;
    }
    else{
        alert("enter valid number");
    }
}

function playSound(){
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset the audio to the beginning
    }

    currentAudio = document.getElementById("myAudio");
    currentAudio.play();
}

function playsound2(){
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset the audio to the beginning
    }
    
    currentAudio = document.getElementById("myAudio2");
    currentAudio.play();
}

