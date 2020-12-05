// document.getElementById("btn").addEventListener("click", () => {
//   var audio = new Audio("./sounds/crash.mp3");
//   audio.play();
// });

// let img = document.querySelectorAll("img");

// img.forEach((x) => {
//   x.addEventListener("click", () => {
//     alert("Hello World");
//   });
// });
let button = document.querySelectorAll(".box button");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    let txt = button[i].innerText;
    if (txt === "m") {
      let audio = new Audio("./sounds/crash.mp3");
      audio.play();
    } else if (txt === "o") {
      let audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
    } else if (txt === "b") {
      let audio = new Audio("./sounds/snare.mp3");
      audio.play();
    } else if (txt === "i") {
      let audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
    } else if (txt === "n") {
      let audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
    } else if (txt === "a") {
      let audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
    } else if (txt === "k") {
      let audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
    } else {
      alert("Please enter right key");
    }
  });
}

document.addEventListener("keypress", (event) => {
  let keyBoardPress = event.key;

  switch (keyBoardPress) {
    case "m":
      let m = new Audio("./sounds/crash.mp3");
      m.play();
      break;
    case "o":
      let o = new Audio("./sounds/kick-bass.mp3");
      o.play();
      break;
    case "b":
      let b = new Audio("./sounds/snare.mp3");
      b.play();
      break;
    case "i":
      let i = new Audio("./sounds/tom-1.mp3");
      i.play();
      break;
    case "n":
      let n = new Audio("./sounds/tom-2.mp3");
      n.play();
      break;
    case "a":
      let a = new Audio("./sounds/tom-3.mp3");
      a.play();
      break;
    case "k":
      let k = new Audio("./sounds/tom-4.mp3");
      k.play();
      break;
    default:
      alert("Please enter right key /mobinak/");
  }
});
