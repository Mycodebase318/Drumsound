

for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
     var buttonInnerHTML = this.innerHTML;
     playSound(buttonInnerHTML);
     //this.style.color="white";
     buttonAnimation(buttonInnerHTML);
    });  
}

document.addEventListener("keypress",function(event){
    playSound(event.key);
    //this.style.color="white";
    buttonAnimation(event.key);
 })
     
function playSound(key){


     if (key== "w")
     {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
     
    }
    else if (key== "a")
    {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    else if (key== "s")
    {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if (key== "d")
    {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    else if (key== "j")
    {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if (key== "k")
    {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if (key== "l")
    {
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
 
}





