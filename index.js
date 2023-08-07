var allbuttons = document.querySelectorAll("button");
var numButtons = document.querySelectorAll("button").length;

for (var i=0; i<numButtons; i++)
{
    allbuttons[i].addEventListener("click", function(){
    var buttonName = this.innerHTML;
    audioo(buttonName);
    buttonAnimation(buttonName);
    })
    
}


document.addEventListener("keypress", function(event){
    var keyName = event.key;
    console.log(keyName);
    audioo(keyName);
    buttonAnimation(keyName);
})



function buttonAnimation(pressedKey)
{
    var toChange = document.querySelector("."+pressedKey);
    toChange.classList.add("pressed");
    setTimeout(function(){
        toChange.classList.remove("pressed");
    }, 100)
}


function audioo (button)
{
    switch (button) {
        case "w" || "W":
            var aud1 = new Audio("./sounds/tom-1.mp3");
            aud1.play();
            break;

        case "a" || "A":
            var aud2 = new Audio("./sounds/tom-2.mp3");
            aud2.play();
            break;
        
        case "s" || "S":
            var aud3 = new Audio("./sounds/tom-3.mp3");
            aud3.play();
            break;
        case "d" || "D":
            var aud4 = new Audio("./sounds/tom-4.mp3");
            aud4.play();
            break;
        case "j" || "J":
            var aud5 = new Audio("./sounds/snare.mp3");
            aud5.play();
            break;
        case "k" || "K":
            var aud6 = new Audio("./sounds/crash.mp3");
            aud6.play();
            break;
        case "l" || "L":
            var aud7 = new Audio("./sounds/kick-bass.mp3");
            aud7.play();
            break;
        default:
            break;
    }
}