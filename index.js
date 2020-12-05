document.getElementById("btn").addEventListener("click", () => {
  var audio = new Audio("./sounds/crash.mp3");
  audio.play();
});

let img = document.getElementsByTagName("img");
console.log(img);
