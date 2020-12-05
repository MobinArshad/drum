// document.getElementById("btn").addEventListener("click", () => {
//   var audio = new Audio("./sounds/crash.mp3");
//   audio.play();
// });

let img = document.getElementsByTagName("img");
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", () => {
    alert("Image clicked Image No : " + (i + 1));
  });
}
