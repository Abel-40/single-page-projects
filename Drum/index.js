let drum=document.querySelectorAll('.drum');
drum.forEach((item) => {
 item.addEventListener('click',function(){
   makeSound(this.innerHTML);
 })
});

function makeSound(value){
  switch(value){
    case 'w' :
      var audio=new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      var audio=new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 's':
      var audio= new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'd':
      var audio=new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 'j':
      var audio=new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'k':
      var audio=new Audio('sounds/crash.mp3');
      audio.play()
      break;
    case 'l':
      var audio=new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:
      console.log("please enter another key");
  }
}

 document.querySelector('body').addEventListener('keypress',function(){
    makeSound(event.key);
  });